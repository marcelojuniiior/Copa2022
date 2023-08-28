import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUtl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);
