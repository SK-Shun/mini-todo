import type { Task } from '../types/todo'
import TodoItem from './TodoItem'

type TodoListProps = {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoList({ tasks, onToggle, onDelete }: TodoListProps) {
  if (tasks.length === 0) {
    return <p className="py-6 text-center text-sm text-slate-500">表示するタスクはありません</p>
  }

  return (
    <ul className="divide-y divide-slate-200 border-y border-slate-200">
      {/* map：タスクの配列を、1件ずつ <TodoItem> に変換した配列にする */}
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList