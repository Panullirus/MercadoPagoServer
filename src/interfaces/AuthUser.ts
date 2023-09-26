export interface AuthUser{
    name: string,
    lastName: string,
    phone: number,
    password: string,
    email: string,
    purchases?: string[],
    cart?: string[]
}