import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import WindowContextProvider from "./context/WindowContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WindowContextProvider>
        <Home />
      </WindowContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
