import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      {/* Header */}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </>
  );
};

export default AppLayout;
