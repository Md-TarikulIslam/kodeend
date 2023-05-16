import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Hero from "../Homepage/Hero/Hero";

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Hero></Hero>
        },
      ]
    }
  ]);

export default router;
