export interface Car {
  id: number;
	name: string;
	year: string;
	price: number;
	status: string;
	brand: string;
	warranty: string;
  description: string;
}

export type CreateCarForm = Partial<Car>;

