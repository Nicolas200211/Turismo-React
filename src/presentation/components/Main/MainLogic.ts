import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GetDestinationsUseCase } from "../../../core/useCases/GetDestinationsUseCase";
import { Destination } from "../../../core/domain/Destination";

export const useMainLogic = () => {
  const [destinations] = useState<Destination[]>(() => {
    const getDestinations = new GetDestinationsUseCase();
    return getDestinations.execute();
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return {
    destinations,
  };
};
