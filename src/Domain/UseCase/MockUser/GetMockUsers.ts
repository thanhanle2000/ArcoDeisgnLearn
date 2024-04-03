import { ListMockUser } from "src/Domain/Model/MockUser";
import { MockUserRepository } from "src/Domain/Repository/MockUserRepository";

export interface GetMockUsersUseCaseInterface {
    invoke: (url: string) => Promise<ListMockUser>;
}

export class GetMockUsers implements GetMockUsersUseCaseInterface {
    private mockUserRepo: MockUserRepository;

    constructor(_mockUserRepo: MockUserRepository) {
        this.mockUserRepo = _mockUserRepo;
    }

    async invoke(url: string): Promise<ListMockUser> {
        return this.mockUserRepo.getMockUsers(url);
    }
}
