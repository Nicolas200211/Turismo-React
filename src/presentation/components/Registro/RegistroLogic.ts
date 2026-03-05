import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRegistration, PaymentInfo } from "../../../core/domain/UserRegistration";
import { ProcessRegistrationUseCase } from "../../../core/useCases/ProcessRegistrationUseCase";

export const useRegistroLogic = (planId: number) => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Datos Personales, 2: Pago, 3: Éxito
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [userInfo, setUserInfo] = useState<UserRegistration>({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "cardNumber") {
      value = value.replaceAll(/\D/g, "").replaceAll(/(.{4})/g, "$1 ").trim().substring(0, 19);
    } else if (name === "expiryDate") {
      value = value.replaceAll(/\D/g, "");
      if (value.length >= 3) {
        value = `${value.substring(0, 2)}/${value.substring(2, 4)}`;
      }
    } else if (name === "cvv") {
      value = value.replaceAll(/\D/g, "").substring(0, 4);
    }

    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const nextStep = () => {
    if (step === 1) {
      if (!userInfo.firstName || !userInfo.lastName || !userInfo.email) {
        setErrorMsg("Por favor, completa tu nombre, apellidos y email.");
        return;
      }
      setErrorMsg("");
      setStep(2);
    }
  };

  const prevStep = () => {
    if (step === 2) {
      setStep(1);
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!paymentInfo.cardNumber || !paymentInfo.cardName || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      setErrorMsg("Por favor, completa todos los detalles de tu tarjeta.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const useCase = new ProcessRegistrationUseCase();
    const result = await useCase.execute(userInfo, paymentInfo, planId);

    setLoading(false);

    if (result.success) {
      setStep(3);
    } else {
      setErrorMsg(result.message);
    }
  };

  const handleFinish = () => {
    router.push("/clases");
  };

  return {
    step,
    loading,
    errorMsg,
    userInfo,
    paymentInfo,
    handleUserChange,
    handlePaymentChange,
    nextStep,
    prevStep,
    handleSubmit,
    handleFinish
  };
};
