import { Destination } from "../../core/domain/Destination";

const staticDestinations: Destination[] = [
  {
    id: 1,
    imgSrc: "/assets/images/imgAyacucho(1).jpg",
    destTitle: "Plaza Mayor de Huamanga",
    location: "Ayacucho, Perú",
    grade: "CULTURA Y RELAX",
    fees: "$300",
    description:
      "La Plaza Mayor de Huamanga es el corazón histórico de Ayacucho. Rodeada de arquitectura colonial, es perfecta para relajarse y sumergirse en la cultura local.",
  },
  {
    id: 2,
    imgSrc: "/assets/images/imgIca(2).jpg",
    destTitle: "Huacachina",
    location: "Ica, Perú",
    grade: "AVENTURA Y NATURALEZA",
    fees: "$500",
    description:
      "Huacachina es un oasis en el desierto, ideal para practicar deportes como sandboarding o dar paseos en buggy mientras disfrutas de su belleza única.",
  },
  {
    id: 3,
    imgSrc: "/assets/images/imgPuno(3).jpg",
    destTitle: "Lago Titicaca",
    location: "Puno, Perú",
    grade: "HISTORIA Y NATURALEZA",
    fees: "$600",
    description:
      "El Lago Titicaca, el lago navegable más alto del mundo, ofrece una experiencia inolvidable al visitar las islas flotantes de los Uros y conocer su cultura ancestral.",
  },
  {
    id: 4,
    imgSrc: "/assets/images/imgLima(4).jpg",
    destTitle: "Plaza Mayor de Lima",
    location: "Lima, Perú",
    grade: "HISTÓRICO Y CULTURAL",
    fees: "$250",
    description:
      "La Plaza Mayor de Lima es el punto de partida ideal para explorar la historia del Perú, con su imponente catedral y el Palacio de Gobierno.",
  },
  {
    id: 5,
    imgSrc: "/assets/images/imgCusco(5).jpg",
    destTitle: "Machu Picchu",
    location: "Cusco, Perú",
    grade: "MARAVILLA MUNDIAL",
    fees: "$1200",
    description:
      "Machu Picchu, la joya de los Andes, es una de las siete maravillas del mundo moderno y un destino que combina historia, misterio y belleza natural.",
  },
  {
    id: 6,
    imgSrc: "/assets/images/imgArequipa(6).jpg",
    destTitle: "Cañón del Colca",
    location: "Arequipa, Perú",
    grade: "AVENTURA Y NATURALEZA",
    fees: "$800",
    description:
      "El Cañón del Colca, uno de los más profundos del mundo, es un lugar perfecto para el avistamiento de cóndores y para conectarse con la naturaleza andina.",
  },
];

export class StaticDestinationRepository {
  getDestinations(): Destination[] {
    return staticDestinations;
  }
}
