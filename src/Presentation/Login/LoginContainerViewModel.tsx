import UserAPIDataSourceImpl from "src/Data/DataSource/Api/UserAPIDataSourceImpl";
import { UserRepositoryImpl } from "src/Data/Repository/UsesrRepositoryImpl";
import { User } from "src/Domain/Model/User";

import { GetUser } from "src/Domain/UseCase/User/GetUser";
import { SetUser } from "src/Domain/UseCase/User/SetUser";

function LoginContainerViewModel() {
    // IMPL
    const userAPIDataSourceImpl = new UserAPIDataSourceImpl();
    const userRepositoryImpl = new UserRepositoryImpl(userAPIDataSourceImpl);

    // USE CASES
    const getUserUseCase = new GetUser(userRepositoryImpl);
    const setUserUseCase = new SetUser(userRepositoryImpl);

    // HANDLE USER WITH LOCALDB
    const handleGetUser = async () => {
        const userGot = await getUserUseCase.invoke();
        return userGot;
    };

    const handleSetUser = async (user: User) => {
        const userSet = await setUserUseCase.invoke(user);
        return userSet;
    };

    return { handleGetUser, handleSetUser };
}

export default LoginContainerViewModel;
