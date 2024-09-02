import logo from "./data/logo";
import SmallMenuBar from "./components/SmallMenuBar";
import BigMenuBar from "./components/BigMenuBar";
import HeroSection from "./components/HeroSection";
import Platform from "./components/Platform";
import platforms from "./data/platform";
import CompanyLogo from "./components/CompanyLogo";
import logoComany from "./data/company-logo";
import FooterInfo from "./components/FooterInfo";
import infoFooter from "./data/footer-info";

const App = () => {
  return (
    <>
      <SmallMenuBar logo={logo} />
      <BigMenuBar logo={logo} />
      <HeroSection />
      <Platform platforms={platforms} />
      <CompanyLogo logoCompany={logoComany} />
      <FooterInfo infoFooter={infoFooter} />
    </>
  );
};

export default App;
