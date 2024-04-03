import { ListMockUser } from "src/Domain/Model/MockUser";

export default interface MockUserDataSource {
    getMockUsers(url: string): Promise<ListMockUser>;
}
