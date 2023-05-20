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
import Chatbot from "../BlogsPage/Blogs/Blog/Chatbot/Chatbot";
import WebDevelopment from "../ServicesPage/Services/Service/WebDevelopment/WebDevelopment";
import AIML from "../ServicesPage/Services/Service/AI&ML/AI&ML";
import NLP from "../ServicesPage/Services/Service/NLP/NLP";
import Blockchain from "../ServicesPage/Services/Service/Blockchain/Blockchain";
import ERPService from "../ServicesPage/Services/Service/ERP/ERP";
import SEOService from "../ServicesPage/Services/Service/SEO/SEO";
import SQAService from "../ServicesPage/Services/Service/SQA/SQA";

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
        path: "/blogs/ai-ml",
        element: <AIAndML></AIAndML>,
      },
      {
        path: "/blogs/erp",
        element: <ERP></ERP>,
      },
      {
        path: "/blogs/blockchain",
        element: <BlockChain></BlockChain>,
      },
      {
        path: "/blogs/computer-vision",
        element: <ComputerVision></ComputerVision>,
      },
      {
        path: "/blogs/sqa",
        element: <SQA></SQA>,
      },
      {
        path: "/blogs/gpt",
        element: <GPT></GPT>,
      },
      {
        path: "/blogs/chatbot",
        element: <Chatbot></Chatbot>
      },
      {
        path: "/services/web-development",
        element: <WebDevelopment></WebDevelopment>,
      },
      {
        path: "/services/ai-ml",
        element: <AIML></AIML>,
      },
      {
        path: "/services/nlp",
        element: <NLP></NLP>,
      },
      {
        path: "/services/blockchain",
        element: <Blockchain></Blockchain>
      },
      {
        path: "/services/erp",
        element: <ERPService></ERPService>
      },
      {
        path: "/services/seo",
        element: <SEOService></SEOService>
      },
      {
        path: "/services/sqa",
        element: <SQAService></SQAService>
      },
    ],
  },
]);

export default router;
