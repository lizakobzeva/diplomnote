import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { appRoutersConfig } from "./lib/config/RouteConfig/RouteConfig";
import { Suspense } from "react";
import Loader from "./components/ui/loader";

function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={appRoutersConfig} /></Suspense>
    </>
  );
}

export default App;