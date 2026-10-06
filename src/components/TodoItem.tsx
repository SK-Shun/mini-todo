import type { Task } from '../types/todo'

type TodoItemProps = {
  task: Task
}

function TodoItem({ task }: TodoItemProps) {
  // 分割代入：task.id・task.title・task.completed を同名の変数に取り出す
  const { id, title, completed } = task

  return (
    <li className="flex items-center gap-3 py-3">
      <input
        id={`task-${id}`}
        type="checkbox"
        className="size-4 accent-blue-600"
        checked={completed}
        readOnly
      />
      <label
        htmlFor={`task-${id}`}
        className={`flex-1 ${completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}
      >
        {title}
      </label>
      <button
        type="button"
        className="rounded-md px-2 py-1 text-sm text-red-600 hover:bg-red-50"
      >
        削除
      </button>
    </li>
  )
}

export default TodoItem