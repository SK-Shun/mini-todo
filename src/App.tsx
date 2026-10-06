import { useState } from 'react'
import FilterButtons from './components/FilterButtons'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import type { Filter, Task } from './types/todo'

// 動作確認用のサンプル（段階6でAPIから取得したデータに置き換える）
const sampleTasks: Task[] = [
  { id: 1, title: '牛乳を買う', completed: false },
  { id: 2, title: 'Viteをインストールする', completed: true },
  { id: 3, title: 'Reactのドキュメントを読む', completed: false },
]

// 絞り込み条件に合うタスクだけを返す（引数と戻り値に型を付けた関数）
function filterTasks(tasks: Task[], filter: Filter): Task[] {
  switch (filter) {
    case 'active':
      return tasks.filter((task) => !task.completed)
    case 'completed':
      return tasks.filter((task) => task.completed)
    case 'all':
      return tasks
  }
}

function App() {
  // state：タスクの配列。setTasks に新しい配列を渡すと、App が再レンダリングされる
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)
  const [filter, setFilter] = useState<Filter>('all')

  // 追加：元の配列を展開してコピーし、末尾に新しいタスクを足した「新しい配列」を作る
  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false }
    setTasks([...tasks, newTask])
  }

  // 削除：指定した id 以外を残した新しい配列を作る（filter）
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // 完了の切り替え：指定した id のタスクだけ、completed を反転したコピーに差し替える（map）
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  // 派生データ：state から毎回計算する値（state には入れない）
  const visibleTasks = filterTasks(tasks, filter)
  const activeCount = tasks.filter((task) => !task.completed).length

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">ミニTODO</h1>

        <TodoForm onAdd={addTask} />

        <FilterButtons current={filter} onChange={setFilter} />

        <TodoList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />

        <p className="mt-4 text-sm text-slate-600">未完了：{activeCount} 件</p>
      </div>
    </main>
  )
}

export default App