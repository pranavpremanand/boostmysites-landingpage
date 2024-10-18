import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LandingPageHeader from "./components/landingPage/Header";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPageFooter from "./components/landingPage/Footer";
import { lazy, Suspense, useContext, useEffect } from "react";
import ContactFormStep1 from "./pages/ContactUs/ContactFormStep1";
import ContactFormStep2 from "./pages/ContactUs/ContactFormStep2";
import SpinnerContextProvider, {
  SpinnerContext,
} from "./components/SpinnerContext";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Home = lazy(() => import("./pages/websites/Home/Home"));

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
              path="/ai-expert"
              element={
                <>
                  <LandingPageHeader />
                  <LandingPage />
                  <LandingPageFooter />
                </>
              }
            />
            <Route
              path="/contact/*"
              element={
                <>
                  <LandingPageHeader />
                  <Routes>
                    <Route index element={<Navigate to="step1" replace />} />
                    <Route path="step1" element={<ContactFormStep1 />} />
                    <Route path="step2" element={<ContactFormStep2 />} />
                  </Routes>
                  <LandingPageFooter />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />

            {/* Website routes */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer/>
                </>
              }
            />
          </Routes>
          <ScrollToTopButton />
          <ScrollToTopOnPageChange />
        </Suspense>
      </BrowserRouter>
      {/* Access context here after the provider wraps the application */}
      <LoadingSpinnerContext />
    </SpinnerContextProvider>
  );
}

export default App;

// component to manage loading spinner based on context
const LoadingSpinnerContext = () => {
  const { spinner } = useContext(SpinnerContext);
  return spinner && <LoadingSpinner />;
};

// scroll to top on route change
const ScrollToTopOnPageChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};
