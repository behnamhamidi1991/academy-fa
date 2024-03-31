import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Offer from "../components/Header/Offer/Offer";

const AppLayout = () => {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <>
      <Offer />
      <Header />

      <main className={theme ? "main dark" : "main light"}>
        <Outlet />
      </main>

      {/* Footer */}
    </>
  );
};

export default AppLayout;
