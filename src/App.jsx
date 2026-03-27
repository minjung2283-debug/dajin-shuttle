import { useState } from 'react'
import ApiKeyBanner from './components/ApiKeyBanner'
import SearchPanel from './components/SearchPanel'
import ResultList from './components/ResultList'
import { ROUTES } from './data/routes'
import { fetchOdsayTransit } from './utils/api'
import { toMin, todayDay, nowTime } from './utils/time'

export default function App() {
  const [kakaoKey, setKakaoKey] = useState(
    import.meta.env.VITE_KAKAO_KEY || localStorage.getItem('kakao_key') || ''
  )
  const [odsayKey, setOdsayKey] = useState(
    import.meta.env.VITE_ODSAY_KEY || localStorage.getItem('odsay_key') || ''
  )
  const [day, setDay]   = useState(todayDay())
  const [time, setTime] = useState(nowTime())
  const [destPlace, setDestPlace] = useState(null)
  const [results, setResults]   = useState(null)
  const [loading, setLoading]   = useState(false)

  const handleSearch = async () => {
    if (!kakaoKey) { alert('카카오 API 키를 먼저 입력해주세요.'); return }
    if (!odsayKey)  { alert('ODsay API 키를 먼저 입력해주세요.'); return }
    if (!destPlace) { alert('목적지를 선택해주세요.'); return }
    if (!time)      { alert('출발 가능 시각을 입력해주세요.'); return }

    const isFri = day === '금'
    const nowMin = toMin(time)

    const candidates = ROUTES.map(route => {
      const list = isFri ? route.schedules.fri : route.schedules.weekday
      const next = list.find(t => toMin(t) >= nowMin) || null
      return { route, nextShuttle: next }
    }).filter(c => c.nextShuttle)

    if (!candidates.length) { setResults([]); return }

    setLoading(true)
    setResults(null)

    const transitResults = await Promise.all(
      candidates.map(c => fetchOdsayTransit(c.route.finalCoord, destPlace))
    )

    setLoading(false)

    const computed = candidates.map((c, i) => {
      const wait = toMin(c.nextShuttle) - nowMin
      const shuttleDur = c.route.durationMin
      const transitDur = transitResults[i]
      const total = transitDur !== null ? wait + shuttleDur + transitDur : null
      return { ...c, wait, shuttleDur, transitDur, total }
    }).sort((a, b) => {
      if (a.total === null) return 1
      if (b.total === null) return -1
      return a.total - b.total
    })

    setResults(computed)
  }

  return (
    <div className="max-w-[440px] mx-auto px-4 pb-20 min-h-screen bg-slate-50">
      {/* Header */}
      <header className="pt-10 pb-7 text-center">
        <p className="font-mono text-[10px] tracking-[3px] text-blue-500 uppercase mb-3 opacity-80">
          Daejin Univ · Shuttle Finder
        </p>
        <h1 className="text-[26px] font-black tracking-tight leading-tight text-slate-900">
          셔틀 타면<br />
          <em className="not-italic text-blue-500">더 빠릅니다</em>
        </h1>
        <p className="mt-2 text-xs text-slate-400 font-light">2026학년도 1학기 · 하교 경로 최적화</p>
      </header>

      {!import.meta.env.VITE_KAKAO_KEY && (
        <ApiKeyBanner
          onKakaoKey={k => setKakaoKey(k)}
          onOdsayKey={k => setOdsayKey(k)}
        />
      )}

      {/* 출발지 고정 */}
      <div className="flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-3 mb-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0 animate-glow" />
        <span className="text-[11px] text-slate-500">출발지 고정</span>
        <span className="ml-auto text-[13px] font-bold text-emerald-600">대진대학교</span>
      </div>

      <SearchPanel
        kakaoKey={kakaoKey}
        day={day} time={time}
        onDayChange={setDay}
        onTimeChange={setTime}
        onDestSelect={setDestPlace}
        onDestClear={() => setDestPlace(null)}
        onSearch={handleSearch}
      />

      <ResultList results={results} destPlace={destPlace} loading={loading} />
    </div>
  )
}
