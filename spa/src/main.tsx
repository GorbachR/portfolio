import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Root from "./Root.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="projects" element={<Projects />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
