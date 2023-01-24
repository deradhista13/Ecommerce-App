import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white overflow-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
