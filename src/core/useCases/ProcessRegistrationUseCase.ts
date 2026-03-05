import { UserRegistration, PaymentInfo, RegistrationResult } from "../domain/UserRegistration";
import { StaticRegistrationRepository } from "../../infrastructure/repositories/StaticRegistrationRepository";

export class ProcessRegistrationUseCase {
  private readonly repository: StaticRegistrationRepository;

  constructor() {
    this.repository = new StaticRegistrationRepository();
  }

  async execute(user: UserRegistration, payment: PaymentInfo, planId: number): Promise<RegistrationResult> {
    // Validación básica de negocio
    if (!user.email.includes("@")) {
      return { success: false, message: "El correo electrónico es inválido." };
    }

    if (payment.cardNumber.length < 15) {
      return { success: false, message: "El número de tarjeta es inválido." };
    }

    return await this.repository.registerUser(user, payment, planId);
  }
}
