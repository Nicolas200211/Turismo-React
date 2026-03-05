import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GetPlanesPagoUseCase } from "../../../core/useCases/GetPlanesPagoUseCase";
import { PlanPago } from "../../../core/domain/PlanPago";

export const usePlanesLogic = () => {
  const [planes] = useState<PlanPago[]>(() => {
    const getPlanes = new GetPlanesPagoUseCase();
    return getPlanes.execute();
  });

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return {
    planes,
  };
};
