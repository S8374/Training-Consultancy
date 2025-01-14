import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Home/Shared/Header/Header";
import SubHeader from "../Components/Home/Shared/SubHeader/SubHeader";
import Footer from "../Components/Home/Shared/Footer/Footer";

export default function Root() {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>My Website - Home</title>
        <meta name="description" content="Welcome to my website! Find everything you need here." />
        <meta name="keywords" content="website, react, helmet, home page" />
      </Helmet>
      <SubHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
