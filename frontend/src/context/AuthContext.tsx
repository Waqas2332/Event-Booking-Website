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
  openSigninModal: boolean;
  openSignupModal: boolean;
  onOpenSignupModal: () => void;
  onCloseSignupModal: () => void;
  onOpenSigninModal: () => void;
  onCloseSigninModal: () => void;
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
  const [openSigninModal, setOpenSigninModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  // handling modals
  const onOpenSignupModal = () => {
    setOpenSignupModal(true);
  };

  const onCloseSignupModal = () => {
    setOpenSignupModal(false);
  };

  const onOpenSigninModal = () => {
    setOpenSigninModal(true);
  };

  const onCloseSigninModal = () => {
    setOpenSigninModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        openSigninModal,
        setIsAuthenticated,
        openSignupModal,
        onOpenSignupModal,
        onCloseSignupModal,
        onOpenSigninModal,
        onCloseSigninModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
