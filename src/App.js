import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { lazy, Suspense, useContext } from "react";
import ContactFormStep1 from "./pages/ContactUs/ContactFormStep1";
import ContactFormStep2 from "./pages/ContactUs/ContactFormStep2";
import SpinnerContextProvider, {
  SpinnerContext,
} from "./components/SpinnerContext";
import { LoadingSpinner } from "./components/LoadingSpinner";

const LandingPage = lazy(() => import("./pages/LandingPage"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <SpinnerContextProvider>
      <BrowserRouter>
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
        <Suspense fallback={<LoadingSpinner />}>
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
      {/* Access context here after the provider wraps the application */}
      <LoadingSpinnerContext />
    </SpinnerContextProvider>
  );
}

// component to manage loading spinner based on context
const LoadingSpinnerContext = () => {
  const { spinner } = useContext(SpinnerContext);
  return spinner && <LoadingSpinner />;
};

export default App;
