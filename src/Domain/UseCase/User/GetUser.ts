import { User } from "src/Domain/Model/User";
import { UserRepository } from "src/Domain/Repository/UserRepository";

export interface GetUserUseCase {
    invoke: () => Promise<User>;
}

export class GetUser implements GetUserUseCase {
    private userRepo: UserRepository;
    constructor(_userRepo: UserRepository) {
        this.userRepo = _userRepo;
    }

    async invoke() {
        return this.userRepo.getUser();
    }
}
