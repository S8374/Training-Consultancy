import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Router } from "./Route/Rout.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/authProvider.jsx";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./Components/ThemProvider/ThemProvider.jsx";

const helmetContext = {};
// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <NextUIProvider>
            <RouterProvider router={Router}></RouterProvider>
            <ToastContainer />
          </NextUIProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
