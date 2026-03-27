import { addMin, fmtDur } from '../utils/time'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

export default function RouteCard({ result, destPlace, isBest, index }) {
  const { route, stop, nextShuttle, wait, shuttleDur, transitDur, total } = result
  const depTime = nextShuttle
  const arrTime = addMin(depTime, shuttleDur)
  const totalStr = total !== null ? fmtDur(total) : '?'
  const transitStr = transitDur !== null ? `약 ${transitDur}분` : '계산 불가'

  const naverHref =
    `https://map.naver.com/v5/directions/` +
    `${stop.coord.x},${stop.coord.y},${encodeURIComponent(stop.name)}/` +
    `${destPlace.x},${destPlace.y},${encodeURIComponent(destPlace.name)}/-/transit`

  return (
    <div
      className={cn(
        'bg-white rounded-xl overflow-hidden mb-2.5 animate-fade-up',
        isBest
          ? 'border border-blue-300 shadow-[0_4px_16px_rgba(59,130,246,0.12)]'
          : 'border border-slate-200 shadow-sm'
      )}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* 헤더 */}
      <div className="flex items-start justify-between gap-2 px-4 py-3 border-b border-slate-100">
        <div className="flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[13px] font-bold text-slate-900">{route.name}</span>
            {isBest && <Badge variant="default" className="text-[9px] tracking-wide">⚡ 최적</Badge>}
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">{route.fee.toLocaleString()}원 · {stop.name} 하차</p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono text-[22px] font-medium text-slate-900 leading-none">{totalStr}</div>
          <div className="text-[10px] text-slate-400 mt-0.5 font-mono">총 소요시간</div>
        </div>
      </div>

      {/* 타임라인 */}
      <div className="px-4 py-3">
        {/* 출발 */}
        <div className="flex gap-2.5">
          <div className="flex flex-col items-center w-4 shrink-0 pt-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-emerald-400 shrink-0 z-10" />
            <div className="w-0.5 flex-1 min-h-[10px] my-0.5 bg-blue-200" />
          </div>
          <div className="flex-1 pb-2.5">
            <div className="font-mono text-xs text-blue-500 font-medium leading-none mb-0.5">{depTime} 출발</div>
            <div className="text-[13px] font-semibold text-slate-800">대진대학교</div>
            <Badge variant="blue" className="mt-1 text-[10px]">🎫 예약 필수 · {route.fee.toLocaleString()}원</Badge>
          </div>
        </div>

        {/* 경유 */}
        <div className="flex gap-2.5">
          <div className="flex flex-col items-center w-4 shrink-0 pt-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-blue-500 shrink-0 z-10" />
            <div className="w-0.5 flex-1 min-h-[10px] my-0.5 border-l-2 border-dashed border-slate-200" />
          </div>
          <div className="flex-1 pb-2.5">
            <div className="font-mono text-xs text-blue-500 font-medium leading-none mb-0.5">~{arrTime} 도착</div>
            <div className="text-[13px] font-semibold text-slate-800">{stop.name}</div>
            <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{route.stops.map(s => s.name).join(' → ')}</div>
            <Badge variant="outline" className="mt-1 text-[10px]">{route.transfer}</Badge>
          </div>
        </div>

        {/* 도착 */}
        <div className="flex gap-2.5">
          <div className="flex flex-col items-center w-4 shrink-0 pt-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 border-2 border-red-400 shrink-0 z-10" />
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-slate-800">{destPlace.name}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">대중교통 {transitStr} 소요</div>
          </div>
        </div>

        {/* 요약 바 */}
        <div className="flex bg-slate-50 rounded-lg overflow-hidden mt-2.5 border border-slate-100">
          {[
            { val: `${wait}분`, key: '셔틀 대기' },
            { val: `${shuttleDur}분`, key: '셔틀 탑승' },
            { val: transitDur !== null ? `${transitDur}분` : '?', key: '이후 이동' },
          ].map((seg, i) => (
            <div key={i} className={cn('flex-1 py-2 text-center', i < 2 && 'border-r border-slate-100')}>
              <div className="font-mono font-medium text-[13px] text-slate-800">{seg.val}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{seg.key}</div>
            </div>
          ))}
        </div>

        {/* 네이버 지도 */}
        <a
          href={naverHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-xs font-semibold font-sans py-2.5 mt-2.5 hover:bg-emerald-100 transition-colors"
        >
          🗺 네이버지도에서 {stop.name} → {destPlace.name} 열기
        </a>
      </div>
    </div>
  )
}
