import User  from "../entities/user";

export interface UserGateway {
    createUser(user: User): Promise<any>
    login(email: string, password: string): Promise<string> 
    // getUserByEmail(email: string): Promise< User | undefined>
    // getUserById(id: string): Promise< User | undefined>
    changePassword(email: string): Promise<void>
}