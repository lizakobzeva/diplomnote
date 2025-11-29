import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/shared/ProtectedRoute";
import { GuestRoute } from "@/components/shared/GuestRoute";

import AuthPageAsync from "@/pages/AuthPage/AuthPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import TemplatePageAsync from "@/pages/TemplatePage/TemplatePage.async";
import NewTemplatePageAsync from "@/pages/NewTemplatePage/NewTEmplatePage.async";


export const appRoutersConfig = createBrowserRouter([
  // Гостевая зона — только для незалогиненных
  {
    path: "/login",
    element: <GuestRoute />,
    children: [
      {
        index: true,
        element: <AuthPageAsync />,
      },
    ],
  },

  // Защищённая зона — всё остальное
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <MainPageAsync />,
      },
      {
        path: "template/:id",
        element: <TemplatePageAsync />,
      },
      {
        path: "newtemplate",
        element: <NewTemplatePageAsync />,
      },
    ],
  },

  // 404 → на главную (или на логин, если нет токена — ProtectedRoute сам разберётся)
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);