import { Fact } from "../Model/Fact";

export interface FactRepository {
    getFacts(a: string): Promise<Fact[]>;
}
