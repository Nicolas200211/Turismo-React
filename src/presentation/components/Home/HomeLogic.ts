import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const useHomeLogic = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
};
