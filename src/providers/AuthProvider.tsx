"use client";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: JSX.Element;
};

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
