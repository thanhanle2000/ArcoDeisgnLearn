import { UserRepository } from "src/Domain/Repository/UserRepository";
import UserDataSource from "src/Data/DataSource/UserDataSource";
import { User } from "src/Domain/Model/User";

export class UserRepositoryImpl implements UserRepository {
    private datasource: UserDataSource;

    constructor(_datasource: UserDataSource) {
        this.datasource = _datasource;
    }
    async getUser(): Promise<User> {
        return this.datasource.getUser();
    }

    setUser(user: User): Promise<User> {
        return this.datasource.setUser(user);
    }
}
