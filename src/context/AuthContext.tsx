import { login, logout, onUserStateChange } from '@/api/firebase/firebase';
import { MyUser } from '@/api/firebase/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AuthContext {
  user: MyUser | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContext>({ user: null, login, logout });
const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<MyUser | null>(null);

  useEffect(() => {
    onUserStateChange((user: MyUser | null) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
