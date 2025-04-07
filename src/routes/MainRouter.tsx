import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MENU } from "defines";
import { About, HomePage } from "pages";

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: MENU.HOME,
      element: <HomePage />,
    },
    {
      path: MENU.ABOUT,
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
};
