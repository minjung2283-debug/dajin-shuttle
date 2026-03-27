// 카카오 장소 검색
export async function searchKakaoPlace(query, kakaoKey) {
  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}&size=6`,
    { headers: { Authorization: `KakaoAK ${kakaoKey}` } }
  )
  const data = await res.json()
  return (data.documents || []).slice(0, 6).map(p => ({
    name: p.place_name,
    address: p.road_address_name || p.address_name || '',
    x: parseFloat(p.x),
    y: parseFloat(p.y),
  }))
}

// ODsay 대중교통 경로 (하차역 → 목적지)
export async function fetchOdsayTransit(origin, dest, odsayKey) {
  try {
    const url =
      `https://api.odsay.com/v1/api/searchPubTransPathT` +
      `?SX=${origin.x}&SY=${origin.y}` +
      `&EX=${dest.x}&EY=${dest.y}` +
      `&apiKey=${encodeURIComponent(odsayKey)}`
    const res = await fetch(url)
    const data = await res.json()
    if (data.result?.path?.length > 0) {
      const best = data.result.path.reduce((a, b) =>
        a.info.totalTime <= b.info.totalTime ? a : b
      )
      return best.info.totalTime // 분 단위
    }
    return null
  } catch {
    return null
  }
}
