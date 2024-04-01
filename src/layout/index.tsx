import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components";

export default function Root({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/register" && pathname !== "/login" && pathname !== "*" && (
        <Navbar />
      )}
      {children}
    </>
  );
}
