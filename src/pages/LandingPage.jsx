import NavBarLandingPage from '../components/NavbarLandingPage/NavbarLandingPage'
import HeroSection from "../components/HeroSection/HeroSection";
import TipsSection from "../components/SectionDicas/TipsSection";
import AdditionalLandingPage from "../components/AdditionalLandingPage/AdditionalLandingPage";
import AboutSection from "../components/SobreLandingPage/AboutLandingPage";
import FeedbackSection from "../components/FeedbackSection/FeedBackSection";
import FooterLandingPage from "../components/FooterLandingPage/FooterLandingPage";

function LandingPage() {
  return (
    <>
      <NavBarLandingPage />
      <HeroSection />
      <TipsSection />
      <AdditionalLandingPage/>
      <AboutSection/>
      <FeedbackSection/>
      <FooterLandingPage/>
    </>
  );
}

export default LandingPage;
