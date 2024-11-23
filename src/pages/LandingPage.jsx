import { Link } from "react-router-dom";
import NavBarLandingPage from '../components/NavbarLandingPage/NavbarLandingPage'
import HeroSection from "../components/HeroSection/HeroSection";
import TipsSection from "../components/SectionDicas/TipsSection";
import AdditionalLandingPage from "../components/AdditionalLandingPage/AdditionalLandingPage";
import AboutSection from "../components/SobreLandingPage/AboutLandingPage";

function LandingPage() {
  return (
    <>
      <NavBarLandingPage />
      <HeroSection />
      <TipsSection />
      <AdditionalLandingPage/>
      <AboutSection/>
    </>
  );
}

export default LandingPage;
