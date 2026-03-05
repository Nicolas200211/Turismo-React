export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export interface RegistrationResult {
  success: boolean;
  message: string;
}
