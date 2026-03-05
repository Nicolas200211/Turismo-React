import { PlanPago } from "../domain/PlanPago";
import { StaticPlanPagoRepository } from "../../infrastructure/repositories/StaticPlanPagoRepository";

export class GetPlanesPagoUseCase {
  private readonly repository: StaticPlanPagoRepository;

  constructor() {
    this.repository = new StaticPlanPagoRepository();
  }

  execute(): PlanPago[] {
    return this.repository.getPlanes();
  }
}
