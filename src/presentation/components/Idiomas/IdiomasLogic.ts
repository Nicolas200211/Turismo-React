import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GetIdiomasUseCase } from "../../../core/useCases/GetIdiomasUseCase";
import { Idioma } from "../../../core/domain/Idioma";

export const useIdiomasLogic = () => {
  const [idiomas] = useState<Idioma[]>(() => {
    const getIdiomas = new GetIdiomasUseCase();
    return getIdiomas.execute();
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return {
    idiomas,
  };
};
