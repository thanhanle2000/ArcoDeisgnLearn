import Http from "src/Core/ApiClientAxios/Http";
import FactDataSource from "../FactDataSource";
import { Fact } from "src/Domain/Model/Fact";
import { FactAPIEntity } from "./Entity/FactAPIEntity";

export default class FactAPIDataSourceImpl
    extends Http
    implements FactDataSource
{
    constructor() {
        super();
    }
    async getFacts(url: string): Promise<Fact[]> {
        const { data } = await this.get(`${url}`);
        return data?.map((item: FactAPIEntity) => item);
    }
}
