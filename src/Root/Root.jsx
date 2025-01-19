import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SubHeader from "../Components/Home/Shared/SubHeader/SubHeader";
import Footer from "../Components/Home/Shared/Footer/Footer";
import ScrollToTop from "../Components/Scroll/ScrollTop";
import RouteLoader from "../Route/RouteLoader";
import Header from "../Components/Home/Shared/Header/Header";




export default function Root() {
  const location = useLocation();

  const isLoginRoute = location.pathname === "/login";
  const isSignRoute = location.pathname === "/signUp";

  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>ConsultPro || Home</title>
        <meta
          name="description"
          content="Welcome to my website! Find everything you need here."
        />
        <meta name="keywords" content="website, react, helmet, home page" />
      </Helmet>

      {/* Loader for Routes */}
      <RouteLoader />

      {!isLoginRoute && !isSignRoute && <SubHeader />}
      {!isLoginRoute && !isSignRoute && <Header/>}

      <div>
        <ScrollToTop />
        <Outlet />
      </div>

      {!isLoginRoute && !isSignRoute && <Footer />}
    </div>
  );
}
