import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes/Routes";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

import { Vortex } from "react-loader-spinner";
import icon from "./assets/images/arrow.png";
import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="font-regular">
      <Helmet>
        <title>KodeEnd</title>
        <meta
          name="description"
          content="Elevate Your Software
with KodeEnd IT Solutions"
        />
        <meta
          property="og:image"
          content="https://www.kodeend.com/static/media/img1.a1544e9a771a2d13e40e.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {loading ? (
        <Vortex
          visible={true}
          height="120"
          width="120"
          ariaLabel="vortex-loading"
          wrapperClass="vortex-wrapper"
          wrapperStyle={{ margin: "320px auto" }}
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          loading={loading}
        />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
      <ScrollToTop
        smooth
        component={<img style={{ marginLeft: "3px" }} src={icon} alt="up" />}
      />
    </div>
  );
}

export default App;
