import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes/Routes";
import { useEffect, useState } from "react";
import Aos from "aos";

import { Vortex } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-regular">
      {loading ? (
        <Vortex
          visible={true}
          height="120"
          width="120"
          ariaLabel="vortex-loading"
          wrapperClass="vortex-wrapper"
          wrapperStyle={{margin:'320px auto'}}
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          loading={loading}
         
        />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
