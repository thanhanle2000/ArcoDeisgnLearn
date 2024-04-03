import Http from "src/Core/ApiClientAxios/Http";
import MockUserDataSource from "../MockUserDataSource";
import { ListMockUser } from "src/Domain/Model/MockUser";

export default class MockUserApiDataSourceImpl
    extends Http
    implements MockUserDataSource
{
    constructor() {
        super();
    }

    async getMockUsers(url: string): Promise<ListMockUser> {
        const { data } = await this.get(`${url}`);

        return data;
    }
}
