import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ========= GLOBAL COMPONENTS ========= */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ========= PAGES ========= */
import Home from "./pages/Home";
import WhoWeAre from "./pages/about/whoWeAre";

/* ========= SERVICES ========= */
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Project";
import TopInfoBar from "./components/TopInfoBar";

import Seo from "./pages/services/Seo";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";

/* ========= PRICING ========= */
import SEO_Packages from "./pages/plans-pricinng/SEO_Packages";
import SEO_Starter_Pack from "./pages/plans-pricinng/SEO_Starter_Pack";
import SmoPackages from "./pages/plans-pricinng/SmoPackages";
import PpcPackages from "./pages/plans-pricinng/PpcPackages";
import WebDesigningPackages from "./pages/plans-pricinng/WebDesigningPackages";
import WhyUs from "./pages/about/WhyUs";

/* ========= VIDEO ========= */
import heroVideo from "./assets/video/heroVideo.mp4";
import SplashCursor from "./components/SplashCursor";
import SmallBusinessSeo from "./pages/services/LocalSeoServices/SmallBusinesSeo";
import DigitalMarketingStrategy from "./pages/services/digitalMarketing/DigitalMarketingStrategy";
import DigitalMarketingAudit from "./pages/services/digitalMarketing/DigitalMarketingAudit";
import ContentMarketing from "./pages/services/digitalMarketing/ContentMarketing";
import EmailMarketing from "./pages/services/digitalMarketing/EmailMarketing";
import ReputationManagement from "./pages/services/digitalMarketing/ReputationManagement";
import FranchiseDigitalMarketing from "./pages/services/digitalMarketing/FranchiseDigitalMarketing";
import GbpOptimization from "./pages/services/LocalSeoServices/GbpOptimization";
import EcommerceSeoServices from "./pages/services/seo/EcommerceSeoServices";
import LinkBuildingServices from "./pages/services/seo/LinkBuildingServices";
import TechnicalSeoServices from "./pages/services/seo/TechnicalSeoServices";
import FranchisSeoServices from "./pages/services/seo/FranchiseSeoServices";
import VoiceSearchOptimization from "./pages/services/seo/VoiceSearchOptimization";
import AppStoreOptimization from "./pages/services/seo/AppStoreOptimization";
import WhiteLabelSeo from "./pages/services/seo/WhiteLabelSeo";
import Geo from "./pages/services/seo/Geo";
import Aeo from "./pages/services/seo/Aeo";
import YouTubeSeo from "./pages/services/videoSeo/YouTubeSeo";
import SocialMediaOptimization from "./pages/services/socialMediaMarketing/SocialMediaOptimization";
import SocialMediaManagement from "./pages/services/socialMediaMarketing/SocialMediaManagement";
import SocialMediaAdvertise from "./pages/services/socialMediaMarketing/SocialMediaAdvertise";
import ShopifyWebDev from "./pages/services/ecommerceDevelopment/ShopifyWebDev";
import WoocommerceDev from "./pages/services/ecommerceDevelopment/WoocommerceDev";
import PaymentGateway from "./pages/services/ecommerceDevelopment/PaymentGateway";
import PPCServices from "./pages/services/digitalAdvertising/PPCServices";
import FacebookAdvertising from "./pages/services/digitalAdvertising/FacebookAdvertising";
import InstagramAdvertising from "./pages/services/digitalAdvertising/InstagramAdvertising";
import XMarketing from "./pages/services/digitalAdvertising/XMarketing";
import LinkedInMarketing from "./pages/services/digitalAdvertising/LinkedInMarketing";
import PinterestMarketing from "./pages/services/digitalAdvertising/PinterestMarketing";
import CRO from "./pages/services/digitalAdvertising/CRO/CRO";
import AmazonPPC from "./pages/services/digitalAdvertising/AmazonPPCService/AmazonPPC";
import TestimonialVideo from "./pages/services/videoSeo/TestimonialVideo";
import VlogVideoProduction from "./pages/services/videoSeo/VlogVideoProduction";
import WordPressDevelopment from "./pages/services/WebDesign&Development/WordPressDevelopment";
import CustomWebsiteDesign from "./pages/services/WebDesign&Development/CustomWebsiteDesign";
import WebsiteRedesign from "./pages/services/WebDesign&Development/WebsiteRedesign";
import MagentoDevelopment from "./pages/services/WebDesign&Development/MagentoDevelopment";
import MobileAppDevelopment from "./pages/services/WebDesign&Development/MobileAppDevelopment";
import JoomlaDev from "./pages/services/WebDesign&Development/JoomlaDev";
import WebsiteHosting from "./pages/services/WebDesign&Development/WebsiteHosting";
import AutomotiveSeo from "./pages/market/popular-market/AutomotiveSeo";
import RestaurantMarketing from "./pages/market/popular-market/Food&Health/RestaurantMarketing";
import AgricultureSEO from "./pages/market/popular-market/Food&Health/AgricultureSEO";
import FitnessSEO from "./pages/market/popular-market/Food&Health/FitnessSEO";
import KitchenRemodelerSEO from "./pages/market/popular-market/Food&Health/KitchenSeo";
import TherapistSEO from "./pages/market/popular-market/Food&Health/TherapistSEO";
import CateringMarketingSEO from "./pages/market/popular-market/Food&Health/CateringMarketingSEO";
import YogaMarketingServices from "./pages/market/popular-market/Food&Health/YogaMarketingServices";
import PharmaMarketingSEO from "./pages/market/popular-market/Food&Health/PharmaMarketingSEO";
import DaycareSEOPage from "./pages/market/Service-Sector/DaycareSEO";
import AviationSeo from "./pages/market/autoMobileAndHome/AviationSeo";
import HomeRemodelingSeo from "./pages/market/autoMobileAndHome/HomeRemodlingSeo";
import CleaningSEOMarketing from "./pages/market/autoMobileAndHome/CleaningSEOMarketing";
import FurnitureSeoMarketing from "./pages/market/autoMobileAndHome/FurnitureStore";
import EntertainmentSEO from "./pages/market/autoMobileAndHome/EntertainmentSeo";
import LogisticsSeo from "./pages/market/autoMobileAndHome/LogisticsSeo";
import ApplianceSeo from "./pages/market/autoMobileAndHome/ApplianceSeo";
import ConstructionSeo from "./pages/market/popular-market/ConstructionSeo";
import DentalSeo from "./pages/market/popular-market/DentalSeo";
import HvacSeo from "./pages/market/popular-market/HvacSeo";
import HealthcareSeo from "./pages/market/popular-market/HealthcareSeo";
import InsuranceSeo from "./pages/market/popular-market/InsuranceSeo";
import LawyerSeo from "./pages/market/popular-market/LawyerSeo";
import RealEstateSeo from "./pages/market/popular-market/RealEstateSeo";
import PlumberSeo from "./pages/market/popular-market/PlumberSeo";
import EducationSEO from "./pages/market/Others/EducationSeo";
import JewelrySEO from "./pages/market/Others/JewelrySeo";
import RetailSEO from "./pages/market/Others/RetailSeo";
import HospitalitySeo from "./pages/market/Others/HospitalitySeo";
import TreeServiceSeo from "./pages/market/Others/TreeServiceSeo";
import PhotographySEO from "./pages/market/Others/PhotographySeo";
import ContractorSEO from "./pages/market/Service-Sector/ContractorSEO";
import FireProtectionSEO from "./pages/market/Service-Sector/FireProtectionSEO";
import FinancialSEO from "./pages/market/Service-Sector/FinancialSEO";
import PestControlMarketing from "./pages/market/Service-Sector/PestControlMarketing";
import ScrollProgress from "./components/ScrollProgress";
import SalonSEO from "./pages/market/Service-Sector/SalonSEO";
import VeterinaryMarketing from "./pages/market/Service-Sector/VeterinaryMarketing";
import CannabisSEO from "./pages/market/Others/CannabisSEO";
import TravelMarketing from "./pages/market/Others/TravelMarketing";
import MoversSEO from "./pages/market/Others/MoversSeo";
import Portfolio from "./components/Portfolio";
import Austin from "./pages/services-areas/Austin";
import BostonSeo from "./pages/services-areas/BostonSeo";
import ChicagoSeo from "./pages/services-areas/ChicagoSeo";
import DallasSeo from "./pages/services-areas/DallasSeo";
import HoustonSeo from "./pages/services-areas/HoustonSeo";
import JacksonvilleSeo from "./pages/services-areas/JacksonvilleSeo";
import CharlotteLocalSEO from "./pages/services-areas/Charlotte";
import Columbus from "./pages/services-areas/Columbus";
import Denver from "./pages/services-areas/Denver";
import IndianapolisSEO from "./pages/services-areas/Indianapolis";
import LosAngelesSEO from "./pages/services-areas/LosAngeles";
import NewYorkCitySEO from "./pages/services-areas/NewYork";
import PhoenixSEO from "./pages/services-areas/Phoenix";
import SanDiegoSEO from "./pages/services-areas/SanDiego";
import SeattleSEO from "./pages/services-areas/SeattleSEO";
import MiamiSeo from "./pages/services-areas/MiamiSeo";
import PhiladelphiaSeo from "./pages/services-areas/PhiladelphiaSeo";
import SanAntonioSeo from "./pages/services-areas/SanAntonioSeo";
import SanFranciscoSeo from "./pages/services-areas/SanFrancisco";
import TorontoSeo from "./pages/services-areas/TorontoSeo";
import Footer1 from "./components/Footer1";
import FreeConsultation from "./pages/FreeConsultation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Careers from "./pages/Careers";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      {/* <SplashCursor /> */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* ================= SITE CONTENT ================= */}
      <div className="relative z-10">
        <TopInfoBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/why-choose-us" element={<WhyUs />} />

          {/* SERVICES */}
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-application-development"
            element={<AppDevelopment />}
          />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />

          <Route
            path="/services/digitalMarketing/digital-marketing-strategy"
            element={<DigitalMarketingStrategy />}
          />

          {/* LOCAL SEO SERVICES */}
          <Route
            path="/services/small-business-seo"
            element={<SmallBusinessSeo />}
          />
          <Route
            path="/services/gbp-optimization"
            element={<GbpOptimization />}
          />

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />

          {/* PRICING */}
          <Route path="/pricing/seo-packages" element={<SEO_Packages />} />
          <Route
            path="/pricing/seo-starter-pack"
            element={<SEO_Starter_Pack />}
          />
          <Route path="/pricing/smo-packages" element={<SmoPackages />} />
          <Route path="/pricing/ppc-packages" element={<PpcPackages />} />
          <Route
            path="/pricing/web-design-packages"
            element={<WebDesigningPackages />}
          />
          <Route
            path="/services/digitalMarketing/digital-marketing-audit"
            element={<DigitalMarketingAudit />}
          />
          <Route
            path="/services/digitalMarketing/content-marketing"
            element={<ContentMarketing />}
          />

          <Route
            path="/services/digitalMarketing/email-marketing"
            element={<EmailMarketing />}
          />

          <Route
            path="/services/digitalMarketing/reputation-management"
            element={<ReputationManagement />}
          />

          <Route
            path="/services/digitalMarketing/franchise-digital-marketing"
            element={<FranchiseDigitalMarketing />}
          />

          <Route
            path="/services/seo/ecommerce-seo-services"
            element={<EcommerceSeoServices />}
          />

          <Route
            path="/services/seo/link-building-services"
            element={<LinkBuildingServices />}
          />

          <Route
            path="/services/seo/technical-seo-services"
            element={<TechnicalSeoServices />}
          />

          <Route
            path="/services/seo/franchise-seo-services"
            element={<FranchisSeoServices />}
          />

          <Route
            path="/services/seo/voice-search-optimization"
            element={<VoiceSearchOptimization />}
          />

          <Route
            path="/services/seo/app-store-optimization"
            element={<AppStoreOptimization />}
          />

          <Route
            path="/services/seo/white-label-seo"
            element={<WhiteLabelSeo />}
          />

          <Route
            path="/services/seo/generative-engine-optimization"
            element={<Geo />}
          />

          <Route
            path="/services/seo/answer-engine-optimization"
            element={<Aeo />}
          />

          <Route
            path="/services/youtube-optimization"
            element={<YouTubeSeo />}
          />

          <Route
            path="/services/smo/social-media-optimization"
            element={<SocialMediaOptimization />}
          />

          <Route
            path="/services/smo/social-media-management"
            element={<SocialMediaManagement />}
          />

          <Route
            path="/services/smo/social-media-advertise"
            element={<SocialMediaAdvertise />}
          />

          <Route
            path="/services/shopify-web-development"
            element={<ShopifyWebDev />}
          />

          <Route
            path="/services/woocommerce-web-development"
            element={<WoocommerceDev />}
          />

          <Route
            path="/services/payment-gateway-integration"
            element={<PaymentGateway />}
          />


          {/* Digital Advertising */}
          <Route
            path="/services/pay-per-click"
            element={<PPCServices />}
          />

          <Route
            path="/services/facebook-advertising"
            element={<FacebookAdvertising />}
          />

          <Route
            path="/services/instagram-advertising"
            element={<InstagramAdvertising />}
          />

          <Route
            path="/services/x-marketing"
            element={<XMarketing />}
          />

          <Route
            path="/services/linkedin-marketing"
            element={<LinkedInMarketing />}
          />

          <Route
            path="/services/pinterest-marketing"
            element={<PinterestMarketing />}
          />

          <Route
            path="/services/conversion-rate-optimization"
            element={<CRO />}
          />

          <Route
            path="/services/amazon-ppc-services"
            element={<AmazonPPC />}
          />

          <Route
            path="/services/customer-testimonial-videos"
            element={<TestimonialVideo />}
          />

          <Route
            path="/services/vlog-video-production"
            element={<VlogVideoProduction />}
          />

          <Route
            path="/services/wordpress-development"
            element={<WordPressDevelopment />}
          />

          <Route
            path="/services/custom-website-design"
            element={<CustomWebsiteDesign />}
          />

          <Route
            path="/services/website-redesign"
            element={<WebsiteRedesign />}
          />

          <Route
            path="/services/magento-development"
            element={<MagentoDevelopment />}
          />

          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />

          <Route
            path="/services/joomla-development"
            element={<JoomlaDev />}
          />

          <Route
            path="/services/website-hosting"
            element={<WebsiteHosting />}
          />


          {/* market */}
          <Route
            path="/market/automotive-seo"
            element={<AutomotiveSeo />}
          />

          <Route
            path="/market/construction-seo"
            element={<ConstructionSeo />}
          />

          <Route
            path="/market/dental-seo"
            element={<DentalSeo />}
          />

          <Route
            path="/market/hvac-seo"
            element={<HvacSeo />}
          />

          <Route
            path="/market/healthcare-seo"
            element={<HealthcareSeo />}
          />

          <Route
            path="/market/insurance-seo"
            element={<InsuranceSeo />}
          />

          <Route
            path="/market/lawyer-seo"
            element={<LawyerSeo />}
          />

          <Route
            path="/market/real-estate-seo"
            element={<RealEstateSeo />}
          />

          <Route
            path="/market/plumber-seo"
            element={<PlumberSeo />}
          />

          <Route
            path="/market/restaurant-seo"
            element={<RestaurantMarketing />}
          />

          <Route
            path="/market/agriculture-seo"
            element={<AgricultureSEO />}
          />

          <Route
            path="/market/fitness-seo"
            element={<FitnessSEO />}
          />

          <Route
            path="/market/kitchen-remodeler-seo"
            element={<KitchenRemodelerSEO />}
          />

          <Route
            path="/market/therapist-seo"
            element={<TherapistSEO />}
          />

          <Route
            path="/market/catering-seo"
            element={<CateringMarketingSEO />}
          />
          <Route
            path="/market/yoga-seo"
            element={<YogaMarketingServices />}
          />
          <Route
            path="/market/pharma-seo"
            element={<PharmaMarketingSEO />}
          />
          <Route
            path="/market/daycare-seo"
            element={<DaycareSEOPage />}
          />

          <Route
            path="/market/aviation-seo"
            element={<AviationSeo />}
          />

          <Route
            path="/market/home-remodeling-seo"
            element={<HomeRemodelingSeo />}
          />

          <Route
            path="/market/cleaning-seo"
            element={<CleaningSEOMarketing />}
          />

          <Route
            path="/market/furniture-seo"
            element={<FurnitureSeoMarketing />}
          />

          <Route
            path="/market/entertainment-seo"
            element={<EntertainmentSEO />}
          />

          <Route
            path="/market/logistic-seo"
            element={<LogisticsSeo />}
          />

          <Route
            path="/market/appliance-repair-seo"
            element={<ApplianceSeo />}
          />

          <Route
            path="/market/education-seo"
            element={<EducationSEO />}
          />

          <Route
            path="/market/jewelry-seo"
            element={<JewelrySEO />}
          />

          <Route
            path="/market/retail-seo"
            element={<RetailSEO />}
          />

          <Route
            path="/market/hospitality-seo"
            element={<HospitalitySeo />}
          />

          <Route
            path="/market/tree-service-seo"
            element={<TreeServiceSeo />}
          />

          <Route
            path="/market/photography-seo"
            element={<PhotographySEO />}
          />

          <Route
            path="/market/contractors-seo"
            element={<ContractorSEO />}
          />

          <Route
            path="/market/fire-protection-seo"
            element={<FireProtectionSEO />}
          />

          <Route
            path="/market/financial-seo"
            element={<FinancialSEO />}
          />

          <Route
            path="/market/pest-control-seo"
            element={<PestControlMarketing />}
          />

          <Route
            path="/market/salons-seo"
            element={<SalonSEO />}
          />

          <Route
            path="/market/veterinary-seo"
            element={<VeterinaryMarketing />}
          />

          <Route
            path="/market/cannabis-seo"
            element={<CannabisSEO />}
          />

          <Route
            path="/market/travel-seo"
            element={<TravelMarketing />}
          />

          <Route
            path="/market/movers-seo"
            element={<MoversSEO />}
          />

          {/* Location Pages */}
          <Route
            path="/locations/austin"
            element={<Austin />}
          />
          <Route
            path="/locations/boston"
            element={<BostonSeo />}
          />
          <Route
            path="/locations/chicago"
            element={<ChicagoSeo />}
          />
          <Route
            path="/locations/dallas"
            element={<DallasSeo />}
          />
          <Route
            path="/locations/houston"
            element={<HoustonSeo />}
          />
          <Route
            path="/locations/jacksonville"
            element={<JacksonvilleSeo />}
          />

          <Route
            path="/locations/charlotte"
            element={<CharlotteLocalSEO />}
          />

          <Route
            path="/locations/columbus"
            element={<Columbus />}
          />

          <Route
            path="/locations/denver"
            element={<Denver />}
          />
          <Route
            path="/locations/indianapolis"
            element={<IndianapolisSEO />}
          />
          <Route
            path="/locations/los-angeles"
            element={<LosAngelesSEO />}
          />
          <Route
            path="/locations/new-york"
            element={<NewYorkCitySEO />}
          />
          <Route
            path="/locations/phoenix"
            element={<PhoenixSEO />}
          />
          <Route
            path="/locations/san-diego"
            element={<SanDiegoSEO />}
          />


          <Route
            path="/locations/miami"
            element={<MiamiSeo />}
          />
          <Route
            path="/locations/philadelphia"
            element={<PhiladelphiaSeo />}
          />
          <Route
            path="/locations/san-antonio"
            element={<SanAntonioSeo />}
          />
          <Route
            path="/locations/san-francisco"
            element={<SanFranciscoSeo />}
          />
          <Route
            path="/locations/seattle"
            element={<SeattleSEO />}
          />
          <Route
            path="/locations/toronto"
            element={<TorontoSeo />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route
            path="/terms-conditions"
            element={<TermsConditions />}
          />
          <Route
            path="/cookie-policy"
            element={<CookiePolicy />}
          />

          {/* CONTACT */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* <Footer /> */}
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;