export const toMin = (t) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export const addMin = (t, m) => {
  const tot = toMin(t) + m
  return String(Math.floor(tot / 60) % 24).padStart(2, '0') + ':' + String(tot % 60).padStart(2, '0')
}

export const fmtDur = (m) =>
  m >= 60 ? `${Math.floor(m / 60)}시간 ${m % 60}분` : `${m}분`

export const todayDay = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const d = days[new Date().getDay()]
  return ['월','화','수','목','금'].includes(d) ? d : '월'
}

export const nowTime = () => {
  const now = new Date()
  return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0')
}
