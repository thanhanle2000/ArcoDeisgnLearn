import { User } from "src/Domain/Model/User";
import { UserRepository } from "src/Domain/Repository/UserRepository";

export interface SetUserUseCase {
    invoke: (user: User) => Promise<User>;
}

export class SetUser implements SetUserUseCase {
    private userRepo: UserRepository;
    constructor(_userRepo: UserRepository) {
        this.userRepo = _userRepo;
    }

    async invoke(user: User) {
        return this.userRepo.setUser(user);
    }
}
