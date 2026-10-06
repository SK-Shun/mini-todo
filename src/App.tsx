import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import type { Task } from './types/todo'

// 動作確認用のサンプル（段階6でAPIから取得したデータに置き換える）
const sampleTasks: Task[] = [
  { id: 1, title: '牛乳を買う', completed: false },
  { id: 2, title: 'Viteをインストールする', completed: true },
  { id: 3, title: 'Reactのドキュメントを読む', completed: false },
]

function App() {
  // state：タスクの配列。setTasks に新しい配列を渡すと、App が再レンダリングされる
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)

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

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">ミニTODO</h1>

        <TodoForm onAdd={addTask} />

        {/* ここから下は Tailwind のクラスで見た目を付けている */}
        <div className="mb-4 flex gap-2">
          {/* 絞り込みボタン3つは段階2のまま（段階5で置き換える） */}
        </div>

        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

        {/* 件数の計算は段階5で行う */}
        <p className="mt-4 text-sm text-slate-600">未完了：2 件</p>
      </div>
    </main>
  )
}

export default App