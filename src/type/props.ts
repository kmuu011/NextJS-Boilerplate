import {StaticImageData} from "next/image";
import {TodoItemType} from "./todo";

export interface IHeaderProps {
    title?: string
    description?: string
}

export interface SideSubMenuProps {
    title: string
    action?: Function
    url?: string
}

export interface SideMenuProps {
    image: StaticImageData
    title: string
    children: SideSubMenuProps[]
}

export interface CircleButtonProps {
    image: StaticImageData
    action: Function
}

export interface TodoGroupItemProps {
    index: number
    title: string
    todoList: TodoItemType[]
    updatedAt: string
    reloadTodoGroup: Function
}

export interface TodoItemProps {
    preview?: boolean
    todoGroupIdx: number
    index: number
    content: string
    completedAt: string
    todoListReload?: Function
}