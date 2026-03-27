import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Banner({ icon, label, desc, storageKey, onSaved }) {
  const [val, setVal] = useState('')
  const [saved, setSaved] = useState(!!localStorage.getItem(storageKey))

  const save = () => {
    if (!val.trim()) return
    localStorage.setItem(storageKey, val.trim())
    setSaved(true)
    onSaved(val.trim())
  }

  const reset = () => {
    localStorage.removeItem(storageKey)
    setSaved(false)
    setVal('')
    onSaved('')
  }

  if (saved) return (
    <div className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-3 mb-3">
      <span className="text-lg pt-0.5 shrink-0">✅</span>
      <div className="flex-1">
        <strong className="block text-xs font-bold text-emerald-600 mb-1">{label} 연결됨</strong>
        <p className="text-xs text-slate-500 leading-relaxed">
          {desc}{' '}
          <button onClick={reset} className="text-slate-400 underline text-[11px] hover:text-slate-600">변경</button>
        </p>
      </div>
    </div>
  )

  return (
    <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-3 mb-3">
      <span className="text-lg pt-0.5 shrink-0">{icon}</span>
      <div className="flex-1">
        <strong className="block text-xs font-bold text-amber-600 mb-1">{label} 입력</strong>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        <div className="flex gap-2 mt-2">
          <Input
            type="password"
            placeholder="API 키 붙여넣기"
            value={val}
            onChange={e => setVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && save()}
            className="flex-1 text-xs font-mono h-8 border-amber-200 focus:ring-amber-400"
          />
          <Button variant="amber" size="sm" onClick={save} className="shrink-0">저장</Button>
        </div>
      </div>
    </div>
  )
}

export default function ApiKeyBanner({ onKakaoKey, onOdsayKey }) {
  return (
    <>
      <Banner
        icon="🔑" storageKey="kakao_key"
        label="카카오 REST API 키"
        desc="장소 검색에 사용돼요. (kakao developers → REST API 키)"
        onSaved={onKakaoKey}
      />
      <Banner
        icon="🚇" storageKey="odsay_key"
        label="ODsay API 키"
        desc="대중교통 경로 계산에 사용돼요. (lab.odsay.com → API Key)"
        onSaved={onOdsayKey}
      />
    </>
  )
}
