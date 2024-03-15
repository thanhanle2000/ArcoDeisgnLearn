import { User } from "src/Domain/Model/User";

export interface UserRepository {
    getUser(): Promise<User>;
    setUser(user: User): Promise<User>;
}
