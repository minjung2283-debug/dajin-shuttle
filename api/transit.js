export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  const { sx, sy, ex, ey } = req.query

  if (!sx || !sy || !ex || !ey) {
    return res.status(400).json({ error: 'Missing coordinates', query: req.query })
  }

  const odsayKey = process.env.VITE_ODSAY_KEY
  if (!odsayKey) {
    return res.status(500).json({ error: 'ODsay API key not configured' })
  }

  try {
    const params = new URLSearchParams({ SX: sx, SY: sy, EX: ex, EY: ey, apiKey: odsayKey })
    const url = `https://api.odsay.com/v1/api/searchPubTransPath?${params}`

    const response = await fetch(url, {
      headers: { Referer: 'https://dajin-shuttle.vercel.app' },
    })
    const data = await response.json()

    if (data.result?.path?.length > 0) {
      const best = data.result.path.reduce((a, b) =>
        a.info.totalTime <= b.info.totalTime ? a : b
      )
      return res.status(200).json({ totalTime: best.info.totalTime })
    }

    return res.status(200).json({ totalTime: null, _debug: data })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
