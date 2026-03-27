export default async function handler(req, res) {
  const { sx, sy, ex, ey } = req.query

  if (!sx || !sy || !ex || !ey) {
    return res.status(400).json({ error: 'Missing coordinates' })
  }

  const odsayKey = process.env.VITE_ODSAY_KEY
  if (!odsayKey) {
    return res.status(500).json({ error: 'ODsay API key not configured' })
  }

  try {
    const url =
      `https://api.odsay.com/v1/api/searchPubTransPathT` +
      `?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}` +
      `&apiKey=${encodeURIComponent(odsayKey)}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.result?.path?.length > 0) {
      const best = data.result.path.reduce((a, b) =>
        a.info.totalTime <= b.info.totalTime ? a : b
      )
      return res.status(200).json({ totalTime: best.info.totalTime })
    }

    return res.status(200).json({ totalTime: null })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
