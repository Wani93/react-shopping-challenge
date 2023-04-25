import { User } from 'firebase/auth';

type MyUser = User & { isAdmin: boolean };

interface Product {
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
  option: string[];
  url: string;
  id: string;
}

export type { MyUser, Product };
