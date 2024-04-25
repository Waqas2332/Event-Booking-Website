import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextType);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, openModal, setOpenModal, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};