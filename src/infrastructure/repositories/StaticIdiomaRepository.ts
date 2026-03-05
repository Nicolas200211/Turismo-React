import { Idioma } from "../../core/domain/Idioma";

const staticIdiomas: Idioma[] = [
  {
    id: 1,
    name: "Quechua",
    description: "Aprende el idioma de los Incas. Conéctate con la cultura milenaria de los Andes, indispensable para tus aventuras por la sierra peruana.",
    level: "Básico - Intermedio",
    imgSrc: "/assets/images/quechua.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Aymara",
    description: "Descubre el idioma hablado por las comunidades del Altiplano peruano-boliviano, cerca al majestuoso Lago Titicaca.",
    level: "Básico",
    imgSrc: "/assets/images/aymara.jpg",
    featured: false
  },
  {
    id: 3,
    name: "Inglés para Viajeros",
    description: "Domina las frases esenciales para comunicarte en cualquier lugar del mundo y disfrutar tu viaje sin fronteras.",
    level: "Todos los niveles",
    imgSrc: "/assets/images/english.jpg",
    featured: false
  }
];

export class StaticIdiomaRepository {
  getIdiomas(): Idioma[] {
    return staticIdiomas;
  }
}
