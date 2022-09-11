export interface CreateTodoDto {
    content: string
}

export interface TodoItemType {
    idx: number
    content: string
    createdAt: string
    updatedAt: string
    completedAt: string
}

export interface UpdateTodoDto {
    content?: string
    complete?: boolean
}