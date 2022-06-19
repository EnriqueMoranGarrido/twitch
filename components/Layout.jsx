import React from "react";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <div className="pt-[60px] flex w-full">
      <SideMenu />
      <MainMenu />
    </div>
  );
};

export default Layout;
