import type { Filter } from '../types/todo'

type FilterButtonsProps = {
  current: Filter
  onChange: (filter: Filter) => void
}

// ボタンの値と表示名。配列にしておくと map でまとめて描ける
const FILTER_OPTIONS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了' },
]

function FilterButtons({ current, onChange }: FilterButtonsProps) {
  return (
    <div className="mb-4 flex gap-2" role="group" aria-label="絞り込み">
      {FILTER_OPTIONS.map((option) => {
        const isActive = option.value === current
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium ${
              isActive
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterButtons