import { FactRepository } from "src/Domain/Repository/FactRepository";
import FactDataSource from "src/Data/DataSource/FactDataSource";
import { Fact } from "src/Domain/Model/Fact";

export class FactRepositoryImpl implements FactRepository {
    private datasource: FactDataSource;

    constructor(_datasource: FactDataSource) {
        this.datasource = _datasource;
    }

    async getFacts(url: string): Promise<Fact[]> {
        return this.datasource.getFacts(url);
    }
}
