import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomePage,
  ErrorPage,
  RegisterPage,
  TripPlannerPage,
  MyTripsPage,
  TripDetailsPage,
} from "./pages";
import "./index.css";
import { UserContextProvider } from "./context";
import { LoginLayout, UserAuthLayout } from "./common-components";
import { ToastContextProvider } from "./context/ToastContext";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginLayout />,
        children: [
          { path: "", element: <HomePage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        path: "trips",
        element: <UserAuthLayout />,
        children: [
          { path: "plan", element: <TripPlannerPage /> },
          { path: "", element: <MyTripsPage /> },
          { path: ":id", element: <TripDetailsPage /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <ToastContextProvider>
        <RouterProvider router={router} />
      </ToastContextProvider>
    </UserContextProvider>
  </StrictMode>
);
