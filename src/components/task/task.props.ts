
export interface Task {
    book: {
      id: number
      isbn: string
      title: string
      cover: string
      author: string
      published: number
      pages: number
    }
    status: number      
}