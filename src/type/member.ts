export interface LoginDto {
    id: string
    password: string
    keepCheck: boolean
}

export interface SignUpDto {
    id: string
    password: string
    nickname: string
    email: string
}

export interface DuplicateCheckDto {
    type: number
    value: string
}