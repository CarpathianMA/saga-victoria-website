import { useState } from 'react'

const monthNames = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
]

const SPECIAL: Record<string, Record<number, 'red' | 'green'>> = {
  '2026-2': { 10: 'red', 22: 'green', 23: 'green' },
}

const MUTED_BEFORE = 9

export default function Calendar() {
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(2)

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startDay = firstDay === 0 ? 6 : firstDay - 1
  const key = `${year}-${month}`
  const specials = SPECIAL[key] ?? {}

  const prevMonth = () => {
    if (month === 0) { setYear((y) => y - 1); setMonth(11) }
    else setMonth((m) => m - 1)
  }

  const nextMonth = () => {
    if (month === 11) { setYear((y) => y + 1); setMonth(0) }
    else setMonth((m) => m + 1)
  }

  function dayClass(day: number) {
    const special = specials[day]
    if (special === 'red') return 'bg-[#fce8ea] text-neutral-900'
    if (special === 'green') return 'bg-[#dff5ea] text-neutral-900'
    if (month === 2 && year === 2026 && day < MUTED_BEFORE) return 'bg-neutral-50 text-neutral-300'
    return 'bg-neutral-50/60 text-neutral-900'
  }

  return (
    <div className="max-lg:max-w-[420px]">
      <h3 className="mb-7 text-[19px] font-bold leading-[1.35] tracking-[-0.01em] text-neutral-900">
        Verifică disponibilitatea camerelor
      </h3>

      <div className="rounded-[20px] border border-neutral-100 bg-white px-7 pb-7 pt-6 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={prevMonth}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-50 hover:text-neutral-900"
            aria-label="Luna anterioară"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M6 1L2 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-[15px] font-semibold text-neutral-900">
            {monthNames[month]} {year}
          </span>
          <button
            onClick={nextMonth}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-50 hover:text-neutral-900"
            aria-label="Luna următoare"
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M2 1L6 6L2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mb-4 grid grid-cols-7">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
            <span key={i} className="text-center text-[11px] font-medium text-neutral-400">{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`e-${i}`} className="flex h-9 items-center justify-center" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            return (
              <div key={day} className="flex h-9 items-center justify-center">
                <span className={`flex h-[34px] w-[34px] items-center justify-center rounded-full text-[13px] font-medium ${dayClass(day)}`}>
                  {day}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
