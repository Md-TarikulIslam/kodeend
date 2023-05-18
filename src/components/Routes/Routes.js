import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Hero from "../Homepage/Hero/Hero";
import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";
import Services from "../ServicesPage/Services/Services";
import Blogs from "../BlogsPage/Blogs/Blogs";
import AIAndML from "../BlogsPage/Blogs/Blog/AIAndML/AIAndML";
import ERP from "../BlogsPage/Blogs/Blog/ERP/ERP";
import BlockChain from "../BlogsPage/Blogs/Blog/BlockChain/BlockChain";
import ComputerVision from "../BlogsPage/Blogs/Blog/ComputerVision/ComputerVision";
import SQA from "../BlogsPage/Blogs/Blog/SQA/SQA";
import GPT from "../BlogsPage/Blogs/Blog/GPT/GPT";
import WebDevelopment from "../ServicesPage/Services/Service/WebDevelopment/WebDevelopment";
import AIML from "../ServicesPage/Services/Service/AI&ML/AI&ML";

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
      {
        path: "/ai-ml",
        element: <AIAndML></AIAndML>,
      },
      {
        path: "/erp",
        element: <ERP></ERP>,
      },
      {
        path: "/blockchain",
        element: <BlockChain></BlockChain>,
      },
      {
        path: "/computer-vision",
        element: <ComputerVision></ComputerVision>,
      },
      {
        path: "/sqa",
        element: <SQA></SQA>,
      },
      {
        path: "/gpt",
        element: <GPT></GPT>,
      },
      {
        path: "/services/web-development",
        element: <WebDevelopment></WebDevelopment>
      },
      {
        path: "/services/ai-ml",
        element: <AIML></AIML>
      },
    ],
  },
]);

export default router;
