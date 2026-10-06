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

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          <li className="flex items-center gap-3 py-3">
            <input type="checkbox" className="size-4 accent-blue-600" />
            <span className="flex-1 text-slate-800">牛乳を買う</span>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm text-red-600 hover:bg-red-50"
            >
              削除
            </button>
          </li>
          <li className="flex items-center gap-3 py-3">
            <input type="checkbox" className="size-4 accent-blue-600" defaultChecked />
            <span className="flex-1 text-slate-400 line-through">Viteをインストールする</span>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm text-red-600 hover:bg-red-50"
            >
              削除
            </button>
          </li>
        </ul>

        <p className="mt-4 text-sm text-slate-600">未完了：1 件</p>
      </div>
    </main>
  )
}

export default App