import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Hero from "../Homepage/Hero/Hero";
import Contact from "../ContactPage/Contact";
import TermsAndConditions from "../Shared/Footer/Legals/TermsAndConditions/TermsAndConditions";
import Privacy from "../Shared/Footer/Legals/Privacy/Privacy";
import GDPR from "../Shared/Footer/Legals/GDPR/GDPR";
const LazyAboutPage = React.lazy(() => import("../AboutPage/About"));
const LazyServicesPage = React.lazy(() =>
  import("../ServicesPage/Services/Services")
);
const LazyWebService = React.lazy(() =>
  import("../ServicesPage/Services/Service/WebDevelopment/WebDevelopment")
);
const LazyAIMLService = React.lazy(() =>
  import("../ServicesPage/Services/Service/AI&ML/AI&ML")
);
const LazyNLPService = React.lazy(() =>
  import("../ServicesPage/Services/Service/NLP/NLP")
);
const LazyBlockchainService = React.lazy(() =>
  import("../ServicesPage/Services/Service/Blockchain/Blockchain")
);
const LazyERPService = React.lazy(() =>
  import("../ServicesPage/Services/Service/ERP/ERP")
);
const LazySEOService = React.lazy(() =>
  import("../ServicesPage/Services/Service/SEO/SEO")
);
const LazySQAService = React.lazy(() =>
  import("../ServicesPage/Services/Service/SQA/SQA")
);
const LazyBlogsPage = React.lazy(() => import("../BlogsPage/Blogs/Blogs"));
const LazyAIMLPage = React.lazy(() =>
  import("../BlogsPage/Blogs/Blog/AIAndML/AIAndML")
);
const LazyERPPage = React.lazy(() => import("../BlogsPage/Blogs/Blog/ERP/ERP"));
const LazyBlokchainPage = React.lazy(() =>
  import("../BlogsPage/Blogs/Blog/BlockChain/BlockChain")
);
const LazyComputerVisionPage = React.lazy(() =>
  import("../BlogsPage/Blogs/Blog/ComputerVision/ComputerVision")
);
const LazySQAPage = React.lazy(() => import("../BlogsPage/Blogs/Blog/SQA/SQA"));
const LazyGPTPage = React.lazy(() => import("../BlogsPage/Blogs/Blog/GPT/GPT"));
const LazyChatbotPage = React.lazy(() =>
  import("../BlogsPage/Blogs/Blog/Chatbot/Chatbot")
);
const LazyWebDevPage = React.lazy(() =>
  import("../BlogsPage/Blogs/Blog/WebDevelopment/WebDevelopment")
);
const LazyCasePage = React.lazy(() =>
  import("../CaseStudyPage/CaseStudies.js")
);
const LazyChatbotCase = React.lazy(() =>
  import("../CaseStudyPage/CaseStudy/ChatbotCase/ChatbotCase")
);
const LazyProfitMaxCase = React.lazy(() =>
  import("../CaseStudyPage/CaseStudy/ProfitMaxCase/ProfitMax")
);
const LazyFraudDetectionCase = React.lazy(() =>
  import("../CaseStudyPage/CaseStudy/FraudDetectionCase/FraudDetectionCase")
);
const LazySocialMediaCase = React.lazy(() =>
  import("../CaseStudyPage/CaseStudy/SocialMediaCase/SocialMediaCase")
);
const LazyDeepLearningCase = React.lazy(() =>
  import("../CaseStudyPage/CaseStudy/DeepLearningCase/DeepLearningCase")
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
        element: (
          <Suspense fallback="loading...">
            <LazyAboutPage></LazyAboutPage>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: (
          <Suspense fallback="loading...">
            <LazyServicesPage></LazyServicesPage>
          </Suspense>
        ),
      },
      {
        path: "/services/web-development",
        element: (
          <Suspense fallback="loading...">
            <LazyWebService></LazyWebService>
          </Suspense>
        ),
      },
      {
        path: "/services/ai-ml",
        element: (
          <Suspense fallback="loading...">
            <LazyAIMLService></LazyAIMLService>
          </Suspense>
        ),
      },
      {
        path: "/services/nlp",
        element: (
          <Suspense fallback="loading...">
            <LazyNLPService></LazyNLPService>
          </Suspense>
        ),
      },
      {
        path: "/services/blockchain",
        element: (
          <Suspense fallback="loading...">
            <LazyBlockchainService></LazyBlockchainService>
          </Suspense>
        ),
      },
      {
        path: "/services/erp",
        element: (
          <Suspense fallback="loading...">
            <LazyERPService></LazyERPService>
          </Suspense>
        ),
      },
      {
        path: "/services/seo",
        element: (
          <Suspense fallback="loading...">
            <LazySEOService></LazySEOService>
          </Suspense>
        ),
      },
      {
        path: "/services/sqa",
        element: (
          <Suspense fallback="loading...">
            <LazySQAService></LazySQAService>
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback="loading...">
            <LazyBlogsPage></LazyBlogsPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/ai-ml",
        element: (
          <Suspense fallback="loading...">
            <LazyAIMLPage></LazyAIMLPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/erp",
        element: (
          <Suspense fallback="loading...">
            <LazyERPPage></LazyERPPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/blockchain",
        element: (
          <Suspense fallback="loading...">
            <LazyBlokchainPage></LazyBlokchainPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/computer-vision",
        element: (
          <Suspense fallback="loading...">
            <LazyComputerVisionPage></LazyComputerVisionPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/sqa",
        element: (
          <Suspense fallback="loading...">
            <LazySQAPage></LazySQAPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/gpt",
        element: (
          <Suspense fallback="loading...">
            <LazyGPTPage></LazyGPTPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/chatbot",
        element: (
          <Suspense fallback="loading...">
            <LazyChatbotPage></LazyChatbotPage>
          </Suspense>
        ),
      },
      {
        path: "/blogs/web-development",
        element: (
          <Suspense fallback="loading...">
            <LazyWebDevPage></LazyWebDevPage>
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
        element: (
          <Suspense fallback="loading...">
            <LazyChatbotCase></LazyChatbotCase>
          </Suspense>
        ),
      },
      {
        path: "/case-study/profit",
        element: (
          <Suspense fallback="loading...">
            <LazyProfitMaxCase></LazyProfitMaxCase>
          </Suspense>
        ),
      },
      {
        path: "/case-study/forest",
        element: (
          <Suspense fallback="loading...">
            <LazyDeepLearningCase></LazyDeepLearningCase>
          </Suspense>
        ),
      },
      {
        path: "/case-study/social",
        element: (
          <Suspense fallback="loading...">
            <LazySocialMediaCase></LazySocialMediaCase>
          </Suspense>
        ),
      },
      {
        path: "/case-study/fraud-detection",
        element: (
          <Suspense fallback="loading...">
            <LazyFraudDetectionCase></LazyFraudDetectionCase>
          </Suspense>
        ),
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
    ],
  },
]);

export default router;
