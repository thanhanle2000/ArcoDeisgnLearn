import { User } from "src/Domain/Model/User";

export default interface UserDataSource {
    getUser(): Promise<User>;
    setUser(user: User): Promise<User>;
}
