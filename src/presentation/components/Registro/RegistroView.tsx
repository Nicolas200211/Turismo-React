"use client";

import React, { Suspense } from "react";
import { useRegistroLogic } from "./RegistroLogic";
import { useSearchParams } from "next/navigation";
import { FaUser, FaCreditCard, FaCheckCircle, FaLock } from "react-icons/fa";

const RegistroContent = () => {
  const searchParams = useSearchParams();
  const planIdParam = searchParams.get("plan");
  const planId = planIdParam ? Number.parseInt(planIdParam, 10) : 1;

  const {
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
  } = useRegistroLogic(planId);

  return (
    <section className="container mx-auto px-6 py-24 md:w-[60%] min-h-[80vh] flex flex-col justify-center items-center">
      <div className="bg-white w-full shadow-2xl rounded-3xl p-8 relative overflow-hidden">
        {step !== 3 && (
          <div className="flex justify-center mb-8 gap-4 px-4 overflow-hidden">
            <div className={`flex items-center gap-2 font-bold ${step >= 1 ? "text-(--color-secondary)" : "text-(--color-nonary)"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${step >= 1 ? "bg-(--color-secondary)" : "bg-(--color-nonary)"}`}>1</div>
              Datos Personales
            </div>
            <div className="w-12 h-1 bg-gray-200 my-auto rounded-full"></div>
            <div className={`flex items-center gap-2 font-bold ${step >= 2 ? "text-(--color-secondary)" : "text-(--color-nonary)"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${step >= 2 ? "bg-(--color-secondary)" : "bg-(--color-nonary)"}`}>2</div>
              Pago Seguro
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-6 text-center font-medium">
            {errorMsg}
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-(--color-senary) mb-6 flex items-center gap-2">
              <FaUser className="text-(--color-quinary)" /> Crea tu cuenta
            </h2>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Nombre</span>
                <input type="text" name="firstName" value={userInfo.firstName} onChange={handleUserChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="Juan" />
              </label>

              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Apellidos</span>
                <input type="text" name="lastName" value={userInfo.lastName} onChange={handleUserChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="Pérez" />
              </label>

              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Correo Electrónico</span>
                <input type="email" name="email" value={userInfo.email} onChange={handleUserChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="juan@ejemplo.com" />
              </label>

              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Teléfono (Opcional)</span>
                <input type="tel" name="phone" value={userInfo.phone} onChange={handleUserChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="+123456789" />
              </label>

              <button onClick={nextStep} className="mt-4 bg-(--color-secondary) text-white font-bold py-4 rounded-xl hover:bg-(--color-quinary) transition-colors border-none cursor-pointer">
                Continuar al Pago
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <h2 className="text-2xl font-bold text-(--color-senary) mb-6 flex items-center gap-2">
              <FaCreditCard className="text-(--color-quinary)" /> Detalles de Pago
            </h2>

            <div className="bg-gray-50 p-4 rounded-xl mb-6 flex items-center justify-between border border-gray-200">
              <div>
                <h3 className="text-sm font-bold text-gray-400">PAGARÁS HOY</h3>
                <p className="text-xl font-bold text-(--color-secondary)">Total a confirmar</p>
              </div>
              <FaLock className="text-gray-400 text-2xl" />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Nombre en la Tarjeta</span>
                <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handlePaymentChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="JUAN PEREZ" />
              </label>

              <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                <span>Número de Tarjeta</span>
                <input type="text" name="cardNumber" maxLength={19} value={paymentInfo.cardNumber} onChange={handlePaymentChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="1234 5678 9101 1121" />
              </label>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                    <span>Expiración</span>
                    <input type="text" name="expiryDate" maxLength={5} value={paymentInfo.expiryDate} onChange={handlePaymentChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="MM/YY" />
                  </label>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-(--color-tertiary) flex flex-col gap-1">
                    <span>CVC</span>
                    <input type="text" name="cvv" maxLength={4} value={paymentInfo.cvv} onChange={handlePaymentChange} className="w-full border border-gray-300 p-3 rounded-xl focus:border-(--color-secondary) outline-none font-normal" placeholder="123" />
                  </label>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button type="button" onClick={prevStep} disabled={loading} className="flex-1 border-2 border-gray-200 bg-transparent text-gray-600 font-bold py-4 rounded-xl hover:border-gray-300 transition-colors cursor-pointer disabled:opacity-50">
                  Volver
                </button>
                <button type="submit" disabled={loading} className="flex-1 bg-(--color-secondary) text-white font-bold py-4 pos-relative rounded-xl hover:bg-(--color-quinary) transition-colors border-none cursor-pointer disabled:opacity-50 flex justify-center items-center">
                  {loading ? <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : "Registrar"}
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in relative flex flex-col items-center">
              <FaCheckCircle className="text-(--color-septenary) text-[5rem] mb-6" />
              <h2 className="text-2xl font-bold text-(--color-senary) mb-4">¡Pago Exitoso!</h2>
              <p className="text-gray-600 mb-8">Pagado y registrado. ¡Disfruta de tus clases de idiomas!</p>
              <button onClick={handleFinish} className="w-full bg-(--color-secondary) text-white font-bold py-3 rounded-xl hover:bg-(--color-quinary) transition-colors border-none cursor-pointer">
                Aceptar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const RegistroView = () => (
  <Suspense fallback={<div className="min-h-screen py-32 text-center font-bold text-lg text-(--color-secondary)">Cargando...</div>}>
    <RegistroContent />
  </Suspense>
);

export default RegistroView;
