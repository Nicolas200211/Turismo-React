import { useState } from "react";
import { useRouter } from "next/navigation";

interface Clase {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLessonTitle: string;
}

export const useClasesLogic = () => {
  const router = useRouter();
  const [clases] = useState<Clase[]>(() => [
    {
      id: "1",
      title: "Quechua Básico I",
      progress: 15,
      totalLessons: 20,
      completedLessons: 3,
      nextLessonTitle: "Saludos y Presentación"
    },
    {
      id: "2",
      title: "Cultura y Tradiciones Andinas",
      progress: 5,
      totalLessons: 10,
      completedLessons: 0,
      nextLessonTitle: "Introducción a la Cosmovisión"
    }
  ]);

  const handleContinue = (claseId: string) => {
    alert(`Redirigiendo a la clase ${claseId}... ¡Próximamente!`);
  };

  const handleLogout = () => {
    router.push("/");
  };

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("es");
  const [targetLang, setTargetLang] = useState("qu");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }
    setIsTranslating(true);

    setTimeout(() => {
      const textToTranslate = inputText.toLowerCase().trim();
      let translation = "Traducido al instante: " + inputText;

      const dictQuechua: Record<string, string> = {
        "hola": "Allinllachu",
        "gracias": "Añay",
        "como estas": "Imaynallam",
        "buenos dias": "Allin p'unchaw",
        "buenas noches": "Allin tuta",
        "buen viaje": "Sumaq puriy",
        "te amo": "Kuyayki"
      };

      const dictAymara: Record<string, string> = {
        "hola": "Kamisaki",
        "gracias": "Yuspayara",
        "como estas": "Kamisaki",
        "buenos dias": "Aski urukipan",
        "buenas noches": "Aski arumakipan"
      };

      if (sourceLang === "es" && targetLang === "qu") {
        translation = dictQuechua[textToTranslate] || `[Quechua simulado] ${inputText}`;
      } else if (sourceLang === "es" && targetLang === "ay") {
        translation = dictAymara[textToTranslate] || `[Aymara simulado] ${inputText}`;
      } else if (sourceLang === "es" && targetLang === "en") {
        translation = textToTranslate === "hola" ? "Hello" : `[English simulated] ${inputText}`;
      }

      setTranslatedText(translation);
      setIsTranslating(false);
    }, 800);
  };

  const handleSpeak = async () => {
    if (!translatedText || isPlaying) return;
    setIsPlaying(true);

    try {
      let langCode = targetLang;
      if (langCode === "qu" || langCode === "ay") {
        langCode = "es";
      }

      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = langCode === "en" ? "en-US" : "es-MX";
      utterance.rate = 0.9;
      utterance.pitch = 1;

      const voices = globalThis.speechSynthesis.getVoices();

      let bestVoice = voices.find(v =>
        v.lang.startsWith(langCode) &&
        (v.name.includes("Natural") || v.name.includes("Online") || v.name.includes("Premium") || v.name.includes("Google"))
      );

      bestVoice ??= voices.find(v => v.lang.startsWith(langCode));

      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        console.error("Error nativo al reproducir la voz del navegador.");
      };

      globalThis.speechSynthesis.cancel();
      globalThis.speechSynthesis.speak(utterance);

    } catch (error) {
      console.error("Error reproduciendo voz:", error);
      setIsPlaying(false);
    }
  };

  const swapLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    setTranslatedText("");
    setInputText("");
  };

  return {
    clases,
    handleContinue,
    handleLogout,
    inputText,
    setInputText,
    translatedText,
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    isTranslating,
    handleTranslate,
    swapLanguages,
    isPlaying,
    handleSpeak
  };
};
