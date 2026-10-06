// アプリの中で扱う「タスク」の型
export type Task = {
  id: number
  title: string
  completed: boolean
}

// 絞り込みの種類。この3つの文字列のどれか、という意味（ユニオン型）
export type Filter = 'all' | 'active' | 'completed'