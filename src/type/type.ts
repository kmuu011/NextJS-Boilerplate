export interface IHeaderProps {
    title?: string
    description?: string
}

export interface SideSubMenuProps {
    title: string
}

export interface SideMenuProps {
    title: string
    children: SideSubMenuProps[]
}