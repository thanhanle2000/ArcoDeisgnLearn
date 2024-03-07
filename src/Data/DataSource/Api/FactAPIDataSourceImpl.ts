import Http from "src/Core/ApiClientAxios/Http";
import FactDataSource from "../FactDataSource";
import { Fact } from "src/Domain/Model/Fact";

export default class FactAPIDataSourceImpl
    extends Http
    implements FactDataSource
{
    constructor() {
        super();
    }
    async getFacts(url: string): Promise<Fact[]> {
        const { data } = await this.get(`${url}`);
        return data?.map((item: Fact) => item);
    }
}
