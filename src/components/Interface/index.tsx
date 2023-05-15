export interface Car {
    id: number;
	name: string;
	year: string;
	price: number;
	status: string;
	brand: string;
	warranty: string;
}

export interface CreateForm {
	name?: string;
	year?: number;
	price?: number;
	brand?: string;
	warranty?: string;
	status?: string;
	description?: string;
  }