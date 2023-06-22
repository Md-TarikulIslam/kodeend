import React, { Suspense } from "react";
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
// import WebDevelopmentBlog from "../BlogsPage/Blogs/Blog/WebDevelopment/WebDevelopmentBlog";
import WebDevelopment from "../ServicesPage/Services/Service/WebDevelopment/WebDevelopment";
import AIML from "../ServicesPage/Services/Service/AI&ML/AI&ML";
import NLP from "../ServicesPage/Services/Service/NLP/NLP";
import Blockchain from "../ServicesPage/Services/Service/Blockchain/Blockchain";
import ERPService from "../ServicesPage/Services/Service/ERP/ERP";
import SEOService from "../ServicesPage/Services/Service/SEO/SEO";
import SQAService from "../ServicesPage/Services/Service/SQA/SQA";
import TermsAndConditions from "../Shared/Footer/Legals/TermsAndConditions/TermsAndConditions";
import Privacy from "../Shared/Footer/Legals/Privacy/Privacy";
import GDPR from "../Shared/Footer/Legals/GDPR/GDPR";
import WebDevelopmentBlog from "../BlogsPage/Blogs/Blog/WebDevelopment/WebDevelopment";
import ChatbotCase from "../CaseStudyPage/CaseStudy/ChatbotCase/ChatbotCase";
import ProfitMaxCase from "../CaseStudyPage/CaseStudy/ProfitMaxCase/ProfitMax";
import DeepLearningCase from "../CaseStudyPage/CaseStudy/DeepLearningCase/DeepLearningCase";
import SocialMediaCase from "../CaseStudyPage/CaseStudy/SocialMediaCase/SocialMediaCase";
import FraudDetectionCase from "../CaseStudyPage/CaseStudy/FraudDetectionCase/FraudDetectionCase";
import StockMarketCase from "../CaseStudyPage/CaseStudy/StockMarketCase/StockMarketCase";
import MaritimePort from "../ConsultingPage/Consalts/MaritimePort/MaritimePort";
import AI from "../ConsultingPage/Consalts/AI/AI";
import Error from "../Shared/404/Error";

const LazyCasePage = React.lazy(() =>
  import("../CaseStudyPage/CaseStudies.js")
);
const LazyPortfoliosPage = React.lazy(() =>
  import("../PortfolioPage/Portfolios/Portfolios")
);
const LazyConsultingPage = React.lazy(() =>
  import("../ConsultingPage/ConsultingPage")
);
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
        element: <Blockchain></Blockchain>,
      },
      {
        path: "/services/erp",
        element: <ERPService></ERPService>,
      },
      {
        path: "/services/seo",
        element: <SEOService></SEOService>,
      },
      {
        path: "/services/sqa",
        element: <SQAService></SQAService>,
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
        element: <Chatbot></Chatbot>,
      },
      {
        path: "/blogs/web-development",
        element: <WebDevelopmentBlog></WebDevelopmentBlog>,
      },
      {
        path: "/portfolios",
        element: (
          <Suspense fallback="loading...">
            <LazyPortfoliosPage></LazyPortfoliosPage>
          </Suspense>
        ),
      },
      {
        path: "/case-study",
        element: (
          <Suspense fallback="loading...">
            <LazyCasePage></LazyCasePage>
          </Suspense>
        ),
      },
      {
        path: "/case-study/chatbot",
        element: <ChatbotCase></ChatbotCase>,
      },
      {
        path: "/case-study/profit",
        element: <ProfitMaxCase></ProfitMaxCase>,
      },
      {
        path: "/case-study/forest",
        element: <DeepLearningCase></DeepLearningCase>,
      },
      {
        path: "/case-study/social",
        element: <SocialMediaCase></SocialMediaCase>,
      },
      {
        path: "/case-study/fraud-detection",
        element: <FraudDetectionCase></FraudDetectionCase>,
      },
      {
        path: "/case-study/stock-market",
        element: <StockMarketCase></StockMarketCase>,
      },
      {
        path: "/consulting",
        element: (
          <Suspense fallback="loading...">
            <LazyConsultingPage></LazyConsultingPage>
          </Suspense>
        ),
      },
      {
        path: "/consulting/maritime-port",
        element: <MaritimePort></MaritimePort>,
      },
      {
        path: "/consulting/ai",
        element: <AI></AI>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/gdpr",
        element: <GDPR></GDPR>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
