import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
// import PlayGround from "./Components/PlayGround/PlayGround";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
