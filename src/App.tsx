import TodoList from './components/TodoList'
import type { Task } from './types/todo'

// 動作確認用のサンプル（段階6でAPIから取得したデータに置き換える）
const sampleTasks: Task[] = [
  { id: 1, title: '牛乳を買う', completed: false },
  { id: 2, title: 'Viteをインストールする', completed: true },
  { id: 3, title: 'Reactのドキュメントを読む', completed: false },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">ミニTODO</h1>

        {/* 入力フォーム：見た目は index.css の通常のCSSで付けている */}
        <form className="todo-form">
          <label htmlFor="new-task" className="sr-only">
            新しいタスク
          </label>
          <input
            id="new-task"
            className="todo-form__input"
            type="text"
            placeholder="やることを入力"
          />
          <button className="todo-form__button" type="submit">
            追加
          </button>
        </form>

        {/* ここから下は Tailwind のクラスで見た目を付けている */}
        <div className="mb-4 flex gap-2">
          <button
            type="button"
            className="rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white"
          >
            すべて
          </button>
          <button
            type="button"
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            未完了
          </button>
          <button
            type="button"
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            完了
          </button>
        </div>

                <TodoList tasks={sampleTasks} />

        {/* 件数の計算は段階5で行う */}
        <p className="mt-4 text-sm text-slate-600">未完了：2 件</p>
      </div>
    </main>
  )
}

export default App