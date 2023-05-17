import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes/Routes";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-regular">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
