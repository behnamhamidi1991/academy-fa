import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
