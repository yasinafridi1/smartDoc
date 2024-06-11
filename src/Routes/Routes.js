import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Home/LandingPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
