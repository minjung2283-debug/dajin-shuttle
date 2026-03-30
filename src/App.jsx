import { useState } from 'react'
import SearchPanel from './components/SearchPanel'
import ResultList from './components/ResultList'
import Autocomplete from './components/Autocomplete'
import { ROUTES } from './data/routes'
import { fetchOdsayTransit } from './utils/api'
import { toMin, todayDay, nowTime } from './utils/time'

export default function App() {
  const kakaoKey = import.meta.env.VITE_KAKAO_KEY || localStorage.getItem('kakao_key') || ''
  const odsayKey = import.meta.env.VITE_ODSAY_KEY || localStorage.getItem('odsay_key') || ''
  const [day, setDay]   = useState(todayDay())
  const [time, setTime] = useState(nowTime())
  const [destPlace, setDestPlace] = useState(null)
  const [results, setResults]   = useState(null)
  const [loading, setLoading]   = useState(false)
  const [pureTransitMin, setPureTransitMin] = useState(null)

  const handleSearch = async () => {
    if (!kakaoKey) { alert('카카오 API 키를 먼저 입력해주세요.'); return }
    if (!odsayKey)  { alert('ODsay API 키를 먼저 입력해주세요.'); return }
    if (!destPlace) { alert('목적지를 선택해주세요.'); return }
    if (!time)      { alert('출발 가능 시각을 입력해주세요.'); return }

    const isFri = day === '금'
    const nowMin = toMin(time)

    // Generate one candidate per (route × stop)
    const perStop = ROUTES.flatMap(route => {
      const list = isFri ? route.schedules.fri : route.schedules.weekday
      const next = list.find(t => toMin(t) >= nowMin) || null
      if (!next) return []
      return route.stops.map(stop => ({ route, nextShuttle: next, stop }))
    })

    if (!perStop.length) { setResults([]); return }

    setLoading(true)
    setResults(null)
    setPureTransitMin(null)

    // 대진대학교 좌표 (포천시 신북면)
    const DAEJIN_COORD = { x: 127.0638, y: 37.7315 }

    // ODsay rate limit 방지: 4개씩 순차 처리 (대진대 → 목적지 호출 포함)
    const allCoords = [...perStop.map(c => c.stop.coord), DAEJIN_COORD]
    const allResults = []
    for (let i = 0; i < allCoords.length; i += 4) {
      const batch = await Promise.all(
        allCoords.slice(i, i + 4).map(coord => fetchOdsayTransit(coord, destPlace))
      )
      allResults.push(...batch)
    }
    const transitResults = allResults.slice(0, perStop.length)
    setPureTransitMin(allResults[allResults.length - 1])
    setLoading(false)

    // Compute totals and keep best stop per route
    const byRoute = new Map()
    perStop.forEach((c, i) => {
      const wait = toMin(c.nextShuttle) - nowMin
      const shuttleDur = c.stop.minsFromDep
      const transitDur = transitResults[i]
      const total = transitDur !== null ? shuttleDur + transitDur : null
      const entry = { ...c, wait, shuttleDur, transitDur, total }
      const prev = byRoute.get(c.route.id)
      if (!prev) { byRoute.set(c.route.id, entry); return }
      const better =
        total !== null && (prev.total === null || total < prev.total)
      if (better) byRoute.set(c.route.id, entry)
    })

    const computed = [...byRoute.values()].sort((a, b) => {
      if (a.total === null) return 1
      if (b.total === null) return -1
      return a.total - b.total
    })

    setResults(computed)
  }

  return (
    <div className="max-w-[440px] mx-auto px-4 pb-20 min-h-screen bg-white">
      {/* Header */}
      <header className="pt-10 pb-7 text-center">
        <p className="mt-2 text-[11px] text-slate-400 font-soli mb-3">PL lab</p>
        <p className="font-mono text-[12px] tracking-[3px] text-blue-500 uppercase mb-3 opacity-80">
          Daejin Univ · Shuttle Finder
        </p>
      </header>

      {/* 출발지 + 목적지 카드 */}
      <div className="border border-slate-200 rounded-xl overflow-visible mb-2.5">
        {/* 출발지 고정 행 */}
        <div className="flex items-center gap-2.5 px-3.5 h-[44px] border-b border-slate-100">
          <span className="w-2 h-2 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.7)] shrink-0" />
          <span className="text-[11px] text-slate-400">출발지 고정</span>
          <span className="ml-auto text-[13px] font-bold text-slate-500">대진대학교</span>
        </div>
        {/* 목적지 행 */}
        <div className="flex items-center gap-2.5 px-3.5 h-[44px]">
          <span className="w-2 h-2 rounded-full shadow-[0_0_6px_rgba(248,113,113,0.7)] shrink-0" />
          {destPlace ? (
            <>
              <span className="text-[11px] text-slate-400">목적지</span>
              <span className="ml-auto text-[13px] font-bold text-slate-500 truncate">{destPlace.name}</span>
              <button onClick={() => setDestPlace(null)} className="text-slate-300 hover:text-slate-500 text-xs shrink-0">✕</button>
            </>
          ) : (
            <div className="flex-1 min-w-0">
              <Autocomplete kakaoKey={kakaoKey} onSelect={setDestPlace} onClear={() => setDestPlace(null)} />
            </div>
          )}
        </div>
      </div>

      <SearchPanel
        kakaoKey={kakaoKey}
        day={day} time={time}
        onDayChange={setDay}
        onTimeChange={setTime}
        onSearch={handleSearch}
      />

      <ResultList results={results} destPlace={destPlace} loading={loading} pureTransitMin={pureTransitMin} />
    </div>
  )
}
