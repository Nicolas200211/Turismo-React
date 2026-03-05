import { UserRegistration, PaymentInfo, RegistrationResult } from "../../core/domain/UserRegistration";

export class StaticRegistrationRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async registerUser(_user: UserRegistration, _payment: PaymentInfo, _planId: number): Promise<RegistrationResult> {
    // Simulamos un retraso de red de proceso de pago y registro
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Pagado y registrado. ¡Disfruta de las clases!"
        });
      }, 1500);
    });
  }
}
