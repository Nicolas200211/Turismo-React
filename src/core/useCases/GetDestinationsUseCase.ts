import { StaticDestinationRepository } from "../../infrastructure/repositories/StaticDestinationRepository";
import { Destination } from "../domain/Destination";

export class GetDestinationsUseCase {
  private repository: StaticDestinationRepository;

  constructor() {
    this.repository = new StaticDestinationRepository();
  }

  execute(): Destination[] {
    return this.repository.getDestinations();
  }
}
