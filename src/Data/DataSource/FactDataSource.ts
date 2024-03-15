import { Fact } from "src/Domain/Model/Fact";

export default interface FactDataSource {
    getFacts(url: string): Promise<Fact[]>;
}
