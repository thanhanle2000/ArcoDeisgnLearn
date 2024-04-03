import { ListMockUser } from "../Model/MockUser";

export interface MockUserRepository {
    getMockUsers(url: string): Promise<ListMockUser>;
}
