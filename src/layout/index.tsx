import { Navbar } from "@/components";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function Root({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {pathname !== "/register" && pathname !== "/login" && pathname !== "*" && (
        <Navbar />
      )}
      {children}
    </>
  );
}
