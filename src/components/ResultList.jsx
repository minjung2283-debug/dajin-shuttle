import RouteCard from './RouteCard'

export default function ResultList({ results, destPlace, loading }) {
  if (loading) return (
    <div className="text-center py-10">
      <div className="w-9 h-9 border-[3px] border-blue-100 border-t-blue-500 rounded-full mx-auto mb-3.5"
        style={{ animation: 'spin 0.7s linear infinite' }} />
      <p className="text-[13px] text-slate-400 leading-relaxed">
        셔틀 시간표 분석 중…<br />ODsay 대중교통 경로 계산 중…
      </p>
    </div>
  )

  if (!results) return null

  if (results.length === 0) return (
    <div className="text-center py-9 text-slate-400">
      <div className="text-4xl mb-2.5">😔</div>
      <p className="text-[13px] leading-relaxed">이용 가능한 셔틀이 없습니다.</p>
    </div>
  )

  return (
    <div>
      <div className="flex items-center justify-between mt-5 mb-3">
        <span className="text-xs text-slate-400 font-medium">경로 비교 ({results.length}개 노선)</span>
        <span className="text-[13px] font-bold text-slate-800">📍 {destPlace?.name}</span>
      </div>

      {results.slice(0, 6).map((r, i) => (
        <RouteCard
          key={r.route.id}
          result={r}
          destPlace={destPlace}
          isBest={i === 0 && r.total !== null}
          index={i}
        />
      ))}

      <div className="bg-red-50 border border-red-200 rounded-xl px-3.5 py-3 text-[11px] text-red-600 leading-relaxed mt-3">
        ⚠️ <strong className="text-red-600">노쇼 페널티</strong> — 출발 5분 전까지 미탑승 시 자동 예약 취소.
        출발 30분 내 취소 시 요금 50% 차감, 출발 후 취소 시 100% 차감.
      </div>
    </div>
  )
}
