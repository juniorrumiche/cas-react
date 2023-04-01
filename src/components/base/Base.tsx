import { BaseProps } from "../../types/componets.t";
import { Navbar } from "./Navbar";

export const Base = ({ children }: BaseProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
