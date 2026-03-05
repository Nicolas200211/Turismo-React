"use client";

import React from "react";
import { useClasesLogic } from "./ClasesLogic";
import { FaPlayCircle, FaTrophy, FaSignOutAlt, FaBookOpen, FaLanguage, FaExchangeAlt, FaVolumeUp } from "react-icons/fa";

const ClasesView = () => {
  const {
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
  } = useClasesLogic();

  return (
    <div className="min-h-screen bg-(--color-primary) font-sans">
      <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-(--color-secondary) flex items-center gap-2">
          <FaBookOpen /> Aventura Viajera <span className="text-(--color-quinary) text-sm ml-2">App de Clases</span>
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-(--color-tertiary) hover:text-red-500 transition-colors font-medium cursor-pointer border-none bg-transparent"
        >
          <FaSignOutAlt /> Salir
        </button>
      </nav>

      <main className="container mx-auto px-6 py-12 md:w-[90%] lg:w-[85%] animate-fade-in">
        <header className="mb-12">
          <h2 className="text-4xl font-bold text-(--color-senary) mb-2">¡Hola Viajero! 👋</h2>
          <p className="text-(--color-tertiary) text-lg">Aquí están tus clases activas. ¡Prepárate para tu próxima aventura!</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <section className="flex-2 grid gap-8 md:grid-cols-2 content-start">
            {clases.map((clase) => (
              <div key={clase.id} className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-(--color-secondary)">{clase.title}</h3>
                  <div className="bg-(--color-quinary) text-(--color-octonary) p-3 rounded-full shadow-md">
                    <FaTrophy className="text-xl" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm font-semibold text-(--color-tertiary) mb-2">
                    <span>Progreso: {clase.progress}%</span>
                    <span>{clase.completedLessons} / {clase.totalLessons} Lecciones</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-(--color-secondary) h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${clase.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-1">Próxima Lección</p>
                  <p className="text-md font-semibold text-(--color-tertiary)">{clase.nextLessonTitle}</p>
                </div>

                <button
                  onClick={() => handleContinue(clase.id)}
                  className="w-full bg-(--color-secondary) hover:bg-(--color-quinary) text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer border-none shadow-md"
                >
                  <FaPlayCircle className="text-xl" /> Continuar Aprendiendo
                </button>
              </div>
            ))}
          </section>

          <aside className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-28 border-t-4 border-(--color-quinary)">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-(--color-quinary)/20 p-3 rounded-full text-(--color-quinary)">
                  <FaLanguage className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-(--color-senary)">Traductor</h3>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">En Tiempo Real</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 mb-6 bg-gray-50 p-2 rounded-xl border border-gray-200">
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="bg-transparent border-none outline-none font-bold text-(--color-tertiary) cursor-pointer"
                >
                  <option value="es">Español</option>
                  <option value="qu">Quechua</option>
                  <option value="ay">Aymara</option>
                  <option value="en">Inglés</option>
                </select>

                <button
                  onClick={swapLanguages}
                  className="p-2 bg-white rounded-full text-(--color-secondary) hover:bg-gray-200 transition-colors shadow-sm cursor-pointer border-none"
                >
                  <FaExchangeAlt />
                </button>

                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="bg-transparent border-none outline-none font-bold text-(--color-tertiary) cursor-pointer"
                >
                  <option value="qu">Quechua</option>
                  <option value="ay">Aymara</option>
                  <option value="es">Español</option>
                  <option value="en">Inglés</option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Escribe algo para traducir..."
                    className="w-full border border-gray-300 p-4 rounded-2xl focus:border-(--color-secondary) focus:ring-1 focus:ring-(--color-secondary) outline-none resize-none h-32 text-gray-700 bg-white"
                  ></textarea>
                </div>

                <div className="w-full flex justify-center mt-[-10px] mb-[-10px] z-10 relative">
                  <button
                    onClick={handleTranslate}
                    disabled={isTranslating}
                    className="bg-(--color-secondary) text-white p-3 rounded-full hover:bg-(--color-quinary) transition-all shadow-lg border-none cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                  >
                    {isTranslating ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <FaLanguage className="text-xl" />
                    )}
                  </button>
                </div>

                <div className="relative">
                  <div className="w-full border border-gray-200 bg-gray-50 p-4 rounded-2xl h-32 text-gray-800 overflow-y-auto font-medium">
                    {translatedText || <span className="text-gray-400 font-normal italic">Traducción aparecerá aquí...</span>}
                  </div>
                  {translatedText && (
                    <button
                      onClick={handleSpeak}
                      disabled={isPlaying}
                      className={`absolute bottom-3 right-3 transition-colors cursor-pointer border-none bg-transparent ${isPlaying ? 'text-(--color-secondary) animate-pulse' : 'text-(--color-quinary) hover:text-(--color-secondary)'}`}
                      title="Escuchar pronunciación realista"
                    >
                      <FaVolumeUp className="text-lg" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ClasesView;
