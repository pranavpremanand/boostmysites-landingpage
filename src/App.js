import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
// import { useContext } from "react";
import { Toaster } from "react-hot-toast";
// import { LoadingSpinner } from "./components/LoadingSpinner";
// import { SpinnerContext } from "./components/SpinnerContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import ContactFormStep1 from "./pages/ContactUs/ContactFormStep1";
import ContactFormStep2 from "./pages/ContactUs/ContactFormStep2";
const LandingPage = lazy(() => import("./pages/LandingPage"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  // const { isLoading } = useContext(SpinnerContext);
  return (
    <BrowserRouter>
      {/* {isLoading && <LoadingSpinner />} */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          },
        }}
      />
      <Suspense fallback={<div></div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact/*"
          element={
            <>
              <Header />
              <Routes>
                <Route index element={<Navigate to="step1" replace />} />
                <Route path="step1" element={<ContactFormStep1 />} />
                <Route path="step2" element={<ContactFormStep2 />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
