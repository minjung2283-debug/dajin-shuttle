import { useState, useRef, useEffect } from 'react'
import { searchKakaoPlace } from '../utils/api'
import { cn } from '@/lib/utils'

export default function Autocomplete({ kakaoKey, onSelect, onClear }) {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])
  const [focused, setFocused] = useState(-1)
  const [isOpen, setIsOpen] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(-1)
  const timer = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleInput = (e) => {
    const v = e.target.value
    setQuery(v)
    onClear()
    clearTimeout(timer.current)
    if (v.trim().length < 2) { setIsOpen(false); return }
    timer.current = setTimeout(async () => {
      if (!kakaoKey) return
      try {
        const results = await searchKakaoPlace(v.trim(), kakaoKey)
        setItems(results)
        setIsOpen(results.length > 0)
        setFocused(-1)
      } catch {}
    }, 300)
  }

  const handleKeyDown = (e) => {
    if (!isOpen) return
    if (e.key === 'ArrowDown') { setFocused(f => Math.min(f + 1, items.length - 1)); e.preventDefault() }
    else if (e.key === 'ArrowUp') { setFocused(f => Math.max(f - 1, 0)); e.preventDefault() }
    else if (e.key === 'Enter') { if (focused >= 0) pick(items[focused]); e.preventDefault() }
    else if (e.key === 'Escape') setIsOpen(false)
  }

  const pick = (item) => {
    setQuery(item.name)
    setIsOpen(false)
    onSelect(item)
  }

  const clear = () => {
    setQuery('')
    setIsOpen(false)
    setItems([])
    onClear()
  }

  return (
    <div className="relative" ref={wrapRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          placeholder="예) 여의도 한강공원, 강남역, 홍대입구…"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          autoComplete="off"
          spellCheck={false}
          className={cn(
            'w-full bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-[15px] font-sans',
            'px-3.5 py-3 pr-10 outline-none transition-shadow',
            inputFocused && 'ring-2 ring-blue-400 border-transparent'
          )}
        />
        {query && (
          <button
            onMouseDown={clear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-base leading-none"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-slate-200 rounded-xl overflow-hidden z-50 shadow-lg">
          {items.map((item, i) => (
            <div
              key={i}
              onMouseDown={() => pick(item)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(-1)}
              className={cn(
                'flex items-start gap-2 px-3.5 py-2.5 text-[13px] cursor-pointer transition-colors',
                i !== items.length - 1 && 'border-b border-slate-100',
                (i === focused || i === hoveredIdx) ? 'bg-blue-50' : 'hover:bg-slate-50'
              )}
            >
              <span className="text-[13px] opacity-50 pt-0.5 shrink-0">📍</span>
              <div>
                <div className="font-medium text-slate-800 leading-snug">{item.name}</div>
                {item.address && <div className="text-[11px] text-slate-400 mt-0.5">{item.address}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
