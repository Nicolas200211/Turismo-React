import { Idioma } from "../domain/Idioma";
import { StaticIdiomaRepository } from "../../infrastructure/repositories/StaticIdiomaRepository";

export class GetIdiomasUseCase {
  private readonly repository: StaticIdiomaRepository;

  constructor() {
    this.repository = new StaticIdiomaRepository();
  }

  execute(): Idioma[] {
    const idiomas = this.repository.getIdiomas();
    return idiomas.sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });
  }
}
