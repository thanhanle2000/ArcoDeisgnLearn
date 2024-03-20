import UserDataSource from "../UserDataSource";
import { UserAPIEntity } from "./Entity/UserAPIEntity";
import localDB from "./LocalDB/LocalDB";
import { User } from "src/Domain/Model/User";

export default class UserAPIDataSourceImpl implements UserDataSource {
    db = localDB<UserAPIEntity>("user");
    async getUser(): Promise<User> {
        const data = this.db?.getById("0");

        return data;
    }

    async setUser(user: User): Promise<User> {
        const res: User = {
            username: user?.username,
            password: user?.password,
            isSavePassword: user?.isSavePassword ? true : false,
        };

        this.db.create(
            {
                id: "0",
                username: res?.username,
                password: user?.password,
                isSavePassword: res.isSavePassword,
            },
            true
        );
        return res;
    }
}
