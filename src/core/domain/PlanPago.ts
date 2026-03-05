export interface Feature {
  name: string;
  included: boolean;
}

export interface PlanPago {
  id: number;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  featured: boolean;
}
