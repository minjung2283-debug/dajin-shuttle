import Autocomplete from './Autocomplete'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'

const DAYS = ['월', '화', '수', '목', '금']

export default function SearchPanel({ kakaoKey, day, time, onDayChange, onTimeChange, onDestSelect, onDestClear, onSearch }) {
  return (
    <>
      <Card className="p-4 mb-2.5">
        <p className="font-mono text-[10px] tracking-[2px] text-slate-400 uppercase mb-3">목적지</p>
        <Autocomplete kakaoKey={kakaoKey} onSelect={onDestSelect} onClear={onDestClear} />
      </Card>

      <Card className="p-4 mb-2.5">
        <p className="font-mono text-[10px] tracking-[2px] text-slate-400 uppercase mb-3">요일 · 출발 가능 시각</p>
        <div className="grid grid-cols-[auto_1fr] gap-2.5 items-end">
          {/* 요일 선택 */}
          <div className="flex gap-1">
            {DAYS.map(d => {
              const active = day === d
              const isFri = d === '금'
              return (
                <button
                  key={d}
                  onClick={() => onDayChange(d)}
                  className={cn(
                    'w-[34px] h-[34px] rounded-full text-xs font-bold font-sans transition-all',
                    active && isFri  && 'bg-amber-400 text-black border border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.4)]',
                    active && !isFri && 'bg-blue-500 text-white border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]',
                    !active          && 'bg-slate-100 text-slate-400 border border-slate-200 hover:bg-slate-200',
                  )}
                >
                  {d}
                </button>
              )
            })}
          </div>

          {/* 시각 입력 */}
          <div>
            <label className="block text-[11px] text-slate-400 mb-1.5">학교를 떠날 수 있는 시각</label>
            <input
              type="time"
              value={time}
              onChange={e => onTimeChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-base font-mono font-medium px-3 py-1.5 text-center outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow"
            />
          </div>
        </div>
      </Card>

      <Button className="w-full h-12 text-[15px] mb-1" onClick={onSearch}>
        🔍 최적 경로 찾기
      </Button>
    </>
  )
}
