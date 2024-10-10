import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import 'react-modern-drawer/dist/index.css'
import "keen-slider/keen-slider.min.css"
// import { useContext } from "react";
import { Toaster } from "react-hot-toast";
// import { LoadingSpinner } from "./components/LoadingSpinner";
// import { SpinnerContext } from "./components/SpinnerContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

AOS.init({
  once: true,
  duration:500,
});

function App() {
  // const { isLoading } = useContext(SpinnerContext);
  return (
    <BrowserRouter>
      {/* {isLoading && <LoadingSpinner />} */}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home/>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
