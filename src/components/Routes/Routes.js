import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Hero from "../Homepage/Hero/Hero";
import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";
import Services from "../ServicesPage/Services/Services";
import Blogs from "../BlogsPage/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
