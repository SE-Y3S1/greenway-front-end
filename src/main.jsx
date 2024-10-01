import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import RootLayout from "./layouts/root.layout";
import SchedulingPage from "./pages/scheduling.page";
import CurrentSchedules from "./components/CurrentSchedules";
import AddSchedule from "./components/AddSchedule";
import AllSchedules from "./components/AllSchedules";
import UpdateSchedule from "./components/updateSchedule";
import PredictionPage from "./pages/predictive-model/prediction.page"; 


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path:"/scheduling",
        element: <SchedulingPage/>

      },
      {
        path: "/current",
        element: <CurrentSchedules />,
      },
      {
        path: "/addSchedule",
        element: <AddSchedule />,
      },
      {
        path: "/all",
        element: <AllSchedules />,
      },
      {
        path: "/update/:id",
        element: <UpdateSchedule />, // Add this route for updating schedules
      },
      {
        path: "/waste-prediction",
        element: <PredictionPage />,
      },
      
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default main;