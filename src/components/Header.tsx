import { ReactNode } from "react";
import AccountSettings from "./AccountSettings";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="main-header style-2 navbar">
      {children}
      <AccountSettings />
    </header>
  );
};

export default Header;
