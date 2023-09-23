export interface GetProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

export type ProductForm = Omit<Product, 'id'>;

export interface LoginForm {
  email: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}

export interface RegisterForm {
  email: string;
  username: string;
  password: string;
}

export interface RegisterResponse {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}
