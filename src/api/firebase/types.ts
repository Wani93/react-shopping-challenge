import { User } from 'firebase/auth';

type MyUser = User & { isAdmin: boolean };

export type { MyUser };
