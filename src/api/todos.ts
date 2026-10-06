import type { Task } from '../types/todo'

// DummyJSON が返す1件分の形（APIの都合で決まっている形）
type DummyTodo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

// レスポンス全体の形
type DummyTodosResponse = {
  todos: DummyTodo[]
  total: number
  skip: number
  limit: number
}

const TODOS_URL = 'https://dummyjson.com/todos?limit=10'

// APIの形（DummyTodo）を、アプリで扱いやすい形（Task）に変換する
export function toTask(todo: DummyTodo): Task {
  return {
    id: todo.id,
    title: todo.todo,
    completed: todo.completed,
  }
}

// サンプルのタスクを取得する。async 関数は必ず Promise を返す
export async function fetchTasks(signal?: AbortSignal): Promise<Task[]> {
  const response = await fetch(TODOS_URL, { signal })

  // fetch は 404 や 500 でも失敗扱いにしない。ok（200〜299）かを自分で確かめる
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  // 本文を JSON として読む。中身の形は実行するまで分からないので、型を宣言して受け取る
  const data: DummyTodosResponse = await response.json()
  return data.todos.map(toTask)
}