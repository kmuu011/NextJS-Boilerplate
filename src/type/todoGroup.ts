export interface CreateTodoGroupDto {
    title: string
}

export interface TodoGroupItemType {
    idx: number
    title: string
    order: number
    createdAt: string
    updatedAt: string
}