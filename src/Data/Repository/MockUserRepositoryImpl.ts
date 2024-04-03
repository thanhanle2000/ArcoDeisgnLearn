import { ListMockUser } from "src/Domain/Model/MockUser";
import { MockUserRepository } from "src/Domain/Repository/MockUserRepository";
import MockUserDataSource from "../DataSource/MockUserDataSource";

export class MockUserRepositoryImpl implements MockUserRepository {
    private datasource: MockUserDataSource;

    constructor(_datasource: MockUserDataSource) {
        this.datasource = _datasource;
    }

    async getMockUsers(url: string): Promise<ListMockUser> {
        return this.datasource.getMockUsers(url);
    }
}
