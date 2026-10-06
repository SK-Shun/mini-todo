import { useState, type SubmitEvent } from 'react'

type TodoFormProps = {
  onAdd: (title: string) => void
  disabled: boolean
}

function TodoForm({ onAdd, disabled }: TodoFormProps) {
  // 入力欄の文字列はこのコンポーネントの state で持つ
  const [title, setTitle] = useState('')

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault() // フォーム送信によるページの再読み込みを止める
    const trimmed = title.trim()
    if (trimmed === '') return
    onAdd(trimmed) // 親（App）から受け取った関数を呼ぶ
    setTitle('') // 入力欄を空に戻す
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="sr-only">
        新しいタスク
      </label>
      <input
        id="new-task"
        className="todo-form__input"
        type="text"
        placeholder="やることを入力"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        disabled={disabled}
      />
      <button
        className="todo-form__button"
        type="submit"
        disabled={disabled || title.trim() === ''}
      >
        追加
      </button>
    </form>
  )
}

export default TodoForm