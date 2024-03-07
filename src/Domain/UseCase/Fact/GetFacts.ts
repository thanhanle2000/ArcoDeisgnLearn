import { Fact } from "src/Domain/Model/Fact";
import { FactRepository } from "src/Domain/Repository/FactRepository";

export interface GetFactsUseCaseInterface {
    invoke: (url: string) => Promise<Fact[]>;
}

export class GetFacts implements GetFactsUseCaseInterface {
    private factRepo: FactRepository;

    constructor(_factRepo: FactRepository) {
        this.factRepo = _factRepo;
    }

    async invoke(url: string): Promise<Fact[]> {
        return this.factRepo.getFacts(url);
    }
}
