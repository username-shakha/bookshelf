import { useLocation } from "react-router-dom";
import { Navbar } from "@/components";
import { ReactNode } from "react";

export default function Root({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signup" && pathname !== "/login" && pathname !== "*" && <Navbar />}
      {children}
    </>
  );
}
