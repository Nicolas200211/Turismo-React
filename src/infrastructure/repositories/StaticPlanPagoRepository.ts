import { PlanPago } from "../../core/domain/PlanPago";

const staticPlanes: PlanPago[] = [
  {
    id: 1,
    name: "Básico",
    price: "$9.99/mes",
    description: "Ideal para viajeros casuales que quieren aprender lo básico.",
    features: [
      { name: "Acceso al curso básico", included: true },
      { name: "Ejercicios interactivos", included: true },
      { name: "Soporte comunitario", included: true },
      { name: "Clases en vivo", included: false },
      { name: "Certificado de finalización", included: false }
    ],
    featured: false
  },
  {
    id: 2,
    name: "Premium",
    price: "$19.99/mes",
    description: "Para exploradores serios que desean fluidez total.",
    features: [
      { name: "Acceso a todos los cursos", included: true },
      { name: "Ejercicios interactivos avanzados", included: true },
      { name: "Soporte prioritario", included: true },
      { name: "1 clase en vivo a la semana", included: true },
      { name: "Certificado de finalización", included: false }
    ],
    featured: true
  },
  {
    id: 3,
    name: "Pro",
    price: "$29.99/mes",
    description: "Inmersión total: lenguaje, cultura y masterclasses.",
    features: [
      { name: "Acceso ilimitado", included: true },
      { name: "Correcciones nativos", included: true },
      { name: "Soporte 24/7", included: true },
      { name: "Clases en vivo ilimitadas", included: true },
      { name: "Certificado de finalización", included: true }
    ],
    featured: false
  }
];

export class StaticPlanPagoRepository {
  getPlanes(): PlanPago[] {
    return staticPlanes;
  }
}
