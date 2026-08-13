import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/DWGlogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import {
  FaBullhorn,
  FaSearch,
  FaShareAlt,
  FaLaptopCode,
  FaVideo,
  FaAd,
  FaShoppingCart,
  FaIndustry,
} from "react-icons/fa";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMarketOpen, setIsMarketOpen] = useState(false);

  const handleCloseMarket = () => {
    setIsMarketOpen(false);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSubMenu(null);
  };
  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1c]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/30">
      {/* subtle top glow to sell the glass */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25baff]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="h-16 sm:h-20 md:h-24 lg:h-25 flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Digital WebGuider Logo"
              className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-22 w-auto object-cover"
            />
          </NavLink>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-[#25baff]"
                  : "text-white/90 hover:text-[#25baff]"
                }`
              }
            >
              Home
            </NavLink>

            {/* ABOUT DROPDOWN */}
            <div className="relative group">
              <button
                type="button"
                className="cursor-pointer font-medium text-white/90 hover:text-[#25baff] transition flex items-center gap-1"
              >
                About
                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div className="absolute left-0 top-full border-t-4 border-t-[#25baff] mt-3 w-52 rounded-xl bg-[#0a0f1c]/100 backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <NavLink
                  to="/about/who-we-are"
                  className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                >
                  Who We Are
                </NavLink>

                <NavLink
                  to="/about/why-choose-us"
                  className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                >
                  Why Choose Us
                </NavLink>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button
                type="button"
                className="cursor-pointer font-medium text-white/90 hover:text-[#25baff] transition flex items-center gap-1"
              >
                Services
                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                className={`absolute left-15 -translate-x-1/2 top-full mt-3
      w-[1100px] bg-[#0a0f1c]/100 backdrop-blur-2xl
      border border-white/10 border-t-4 border-t-[#25baff]
      shadow-xl shadow-black/40 rounded-lg
      transition-all duration-300
      p-8 z-50
      ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
              >
                <div className="grid grid-cols-4 gap-8 text-sm">
                  {/* ================= DIGITAL MARKETING ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaBullhorn className="text-[#25baff]" />
                      Digital Marketing
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/digitalMarketing/digital-marketing-strategy",
                          "Digital Marketing Strategy",
                        ],
                        [
                          "/services/digitalMarketing/digital-marketing-audit",
                          "Digital Marketing Audit",
                        ],
                        [
                          "/services/digitalMarketing/content-marketing",
                          "Content Marketing",
                        ],
                        [
                          "/services/digitalMarketing/email-marketing",
                          "Email Marketing",
                        ],
                        [
                          "/services/digitalMarketing/reputation-management",
                          "Reputation Management",
                        ],
                        [
                          "/services/digitalMarketing/franchise-digital-marketing",
                          "Franchise Digital Marketing",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= LOCAL SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaSearch className="text-[#25baff]" />
                      Local SEO Services
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        ["/services/small-business-seo", "Small Business SEO"],
                        ["/services/gbp-optimization", "GBP Optimization"],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= SOCIAL MEDIA ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaShareAlt className="text-[#25baff]" />
                      Social Media Marketing
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/smo/social-media-optimization",
                          "Social Media Optimization",
                        ],
                        [
                          "/services/smo/social-media-management",
                          "Social Media Management",
                        ],
                        [
                          "/services/smo/social-media-advertise",
                          "Social Media Advertising",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= WEBSITE DESIGN ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaLaptopCode className="text-[#25baff]" />
                      Website Design & Development
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/wordpress-development",
                          "WordPress Development",
                        ],
                        [
                          "/services/custom-website-design",
                          "Custom Website Design",
                        ],
                        [
                          "/services/website-redesign",
                          "Website Redesign Service",
                        ],
                        [
                          "/services/magento-development",
                          "Magento Development",
                        ],
                        [
                          "/services/mobile-app-development",
                          "Mobile App Development",
                        ],
                        [
                          "/services/joomla-development",
                          "Joomla Website Development",
                        ],
                        [
                          "/services/website-hosting",
                          "Website Hosting Services",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaSearch className="text-[#25baff]" />
                      SEO
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/seo/ecommerce-seo-services",
                          "Ecommerce SEO Services",
                        ],
                        [
                          "/services/seo/link-building-services",
                          "Link Building Services",
                        ],
                        [
                          "/services/seo/technical-seo-services",
                          "Technical SEO Services",
                        ],
                        [
                          "/services/seo/franchise-seo-services",
                          "Franchise SEO Services",
                        ],
                        [
                          "/services/seo/voice-search-optimization",
                          "Voice Search Optimization",
                        ],
                        [
                          "/services/seo/app-store-optimization",
                          "App Store Optimization",
                        ],
                        ["/services/seo/white-label-seo", "White Label SEO"],
                        [
                          "/services/seo/generative-engine-optimization",
                          "Generative Engine Optimization",
                        ],
                        [
                          "/services/seo/answer-engine-optimization",
                          "Answer Engine Optimization",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= VIDEO SEO ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaVideo className="text-[#25baff]" />
                      Video SEO
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/youtube-optimization",
                          "YouTube Optimization",
                        ],
                        [
                          "/services/customer-testimonial-videos",
                          "Customer Testimonial Videos",
                        ],
                        [
                          "/services/vlog-video-production",
                          "Vlog Video Production Services",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= DIGITAL ADVERTISING ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaAd className="text-[#25baff]" />
                      Digital Advertising
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        ["/services/pay-per-click", "Pay Per Click"],
                        ["/services/facebook-advertising", "Facebook"],
                        ["/services/instagram-advertising", "Instagram"],
                        ["/services/x-marketing", "X"],
                        ["/services/linkedin-marketing", "LinkedIn"],
                        ["/services/pinterest-marketing", "Pinterest"],
                        [
                          "/services/conversion-rate-optimization",
                          "Conversion Rate Optimization",
                        ],
                        [
                          "/services/amazon-ppc-services",
                          "Amazon PPC Services",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= ECOMMERCE ================= */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaShoppingCart className="text-[#25baff]" />
                      Ecommerce Development
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        [
                          "/services/shopify-web-development",
                          "Shopify Web Development",
                        ],
                        [
                          "/services/woocommerce-web-development",
                          "Woocommerce Development",
                        ],
                        [
                          "/services/payment-gateway-integration",
                          "Payment Gateway",
                        ],
                      ].map(([path, label]) => (
                        <li key={path}>
                          <NavLink
                            to={path}
                            onClick={handleCloseMenu}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MARKET DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setIsMarketOpen(true)}
              onMouseLeave={() => setIsMarketOpen(false)}
            >
              <button
                type="button"
                className="cursor-pointer font-medium text-white/90 hover:text-[#25baff] transition flex items-center gap-1"
              >
                Market
                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div
                className={`absolute -left-4 -translate-x-1/2 top-full mt-3
      w-[1100px] bg-[#0a0f1c]/100 backdrop-blur-2xl
      border border-white/10 border-t-4 border-t-[#25baff]
      shadow-xl shadow-black/40 rounded-lg
      transition-all duration-300
      p-8 z-50
      ${isMarketOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
              >
                <div className="grid grid-cols-5 gap-8 text-sm">

                  {/* Popular Markets */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Popular Markets
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "automotive-seo",
                        "construction-seo",
                        "dental-seo",
                        "hvac-seo",
                        "healthcare-seo",
                        "insurance-seo",
                        "lawyer-seo",
                        "real-estate-seo",
                        "plumber-seo",
                      ].map((slug) => (
                        <li key={slug}>
                          <NavLink
                            to={`/market/${slug}`}
                            onClick={handleCloseMarket}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {slug
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Automobile & Home */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Automobile & Home
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "aviation-seo",
                        "home-remodeling-seo",
                        "cleaning-seo",
                        "furniture-seo",
                        "entertainment-seo",
                        "logistic-seo",
                        "appliance-repair-seo",
                      ].map((slug) => (
                        <li key={slug}>
                          <NavLink
                            to={`/market/${slug}`}
                            onClick={handleCloseMarket}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {slug
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Food & Health */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Food & Health
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "restaurant-seo",
                        "agriculture-seo",
                        "fitness-seo",
                        "kitchen-remodeler-seo",
                        "therapist-seo",
                        "catering-seo",
                        "yoga-seo",
                        "pharma-seo",
                      ].map((slug) => (
                        <li key={slug}>
                          <NavLink
                            to={`/market/${slug}`}
                            onClick={handleCloseMarket}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {slug
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Sector */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Service Sector
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "daycare-seo",
                        "contractors-seo",
                        "fire-protection-seo",
                        "financial-seo",
                        "pest-control-seo",
                        "salons-seo",
                        "veterinary-seo",
                      ].map((slug) => (
                        <li key={slug}>
                          <NavLink
                            to={`/market/${slug}`}
                            onClick={handleCloseMarket}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {slug
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Others */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <FaIndustry className="text-[#25baff]" />
                      Others
                    </h4>
                    <ul className="space-y-1.5">
                      {[
                        "education-seo",
                        "jewelry-seo",
                        "retail-seo",
                        "hospitality-seo",
                        "tree-service-seo",
                        "photography-seo",
                        "movers-seo",
                        "cannabis-seo",
                        "travel-seo",
                      ].map((slug) => (
                        <li key={slug}>
                          <NavLink
                            to={`/market/${slug}`}
                            onClick={handleCloseMarket}
                            className={({ isActive }) =>
                              `flex gap-2 transition ${isActive
                                ? "text-[#25baff] font-medium"
                                : "text-white/60 hover:text-[#25baff]"
                              }`
                            }
                          >
                            <FaAngleRight className="mt-1 text-xs" />
                            {slug
                              .replace(/-/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            {/* PLANS & PRICING */}
            <div className="relative group">
              <button
                type="button"
                className="cursor-pointer font-medium text-white/90 hover:text-[#25baff] transition flex items-center gap-1"
              >
                Plans & Pricing
                <span className="inline-block mt-1 text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>

              <div className="absolute left-0 border-t-4 border-t-[#25baff] top-full mt-3 w-72 rounded-xl bg-[#0a0f1c]/100 backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="relative group/sub">
                  <NavLink
                    to="/pricing/seo-packages"
                    className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                  >
                    SEO Services Packages ▸
                  </NavLink>

                  <div className="absolute left-full top-0 ml-1 w-56 rounded-xl bg-[#0a0f1c]/100 backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/40 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                    <NavLink
                      to="/pricing/seo-starter-pack"
                      className="block px-5 py-3 text-white/80 hover:bg-white/5 hover:text-[#25baff] hover:rounded-xl"
                    >
                      Starter Pack
                    </NavLink>
                  </div>
                </div>

                <NavLink
                  to="/pricing/smo-packages"
                  className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                >
                  SMO Services Packages
                </NavLink>

                <NavLink
                  to="/pricing/ppc-packages"
                  className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                >
                  PPC Services Packages
                </NavLink>

                <NavLink
                  to="/pricing/web-design-packages"
                  className="block px-5 py-3 text-white/80 hover:text-[#25baff] hover:bg-white/5 transition hover:rounded-xl"
                >
                  Web Designing Packages
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-[#25baff]"
                  : "text-white/90 hover:text-[#25baff]"
                }`
              }
            >
              Portfolios
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-[#25baff]"
                  : "text-white/90 hover:text-[#25baff]"
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                `font-medium transition ${isActive
                  ? "text-[#25baff]"
                  : "text-white/90 hover:text-[#25baff]"
                }`
              }
            >
              Career
            </NavLink>
          </nav>

          {/* SOCIAL ICONS */}
          <div className="hidden md:flex gap-5 mt-1 mr-3 text-lg text-white/90">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25baff] hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a8d97c] hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25baff] hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <button
            className="md:hidden text-xl sm:text-2xl text-white ml-2 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {
        mobileOpen && (
          <div className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-2xl border-t border-white/10 px-4 sm:px-6 py-6 space-y-5">
            <NavLink
              to="/"
              onClick={closeMobile}
              className="block font-medium text-white/90 hover:text-[#25baff]"
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <div>
              <button
                onClick={() => toggleSubMenu("about")}
                className="w-full flex justify-between items-center font-medium text-white/90"
              >
                About
                <FaChevronDown
                  className={`transition ${openSubMenu === "about" ? "rotate-180" : ""}`}
                />
              </button>

              {openSubMenu === "about" && (
                <div className="ml-4 mt-3 space-y-2">
                  <NavLink
                    to="/about/who-we-are"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Who We Are
                  </NavLink>
                  <NavLink
                    to="/about/why-choose-us"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Why Digital WebGuider
                  </NavLink>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div>
              <button
                onClick={() => toggleSubMenu("services")}
                className="w-full flex justify-between items-center font-medium text-white/90"
              >
                Services
                <FaChevronDown
                  className={`transition ${openSubMenu === "services" ? "rotate-180" : ""}`}
                />
              </button>

              {openSubMenu === "services" && (
                <div className="ml-4 mt-3 space-y-2">
                  <NavLink
                    to="/services/seo"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    SEO
                  </NavLink>
                  <NavLink
                    to="/services/web-design"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Web Design
                  </NavLink>
                  <NavLink
                    to="/services/web-development"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Web Development
                  </NavLink>
                  <NavLink
                    to="/services/mobile-application-development"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Mobile Application Development
                  </NavLink>
                  <NavLink
                    to="/services/social-media-marketing"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Social Media Marketing
                  </NavLink>
                  <NavLink
                    to="/services/online-reputation-management"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Online Reputation Management
                  </NavLink>
                </div>
              )}
            </div>

            {/* PLANS & PRICING */}
            <div>
              <button
                onClick={() => toggleSubMenu("pricing")}
                className="w-full flex justify-between items-center font-medium text-white/90"
              >
                Plans & Pricing
                <FaChevronDown
                  className={`transition ${openSubMenu === "pricing" ? "rotate-180" : ""}`}
                />
              </button>

              {openSubMenu === "pricing" && (
                <div className="ml-4 mt-3 space-y-2">
                  <NavLink
                    to="/pricing/seo-packages"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    SEO Services Packages
                  </NavLink>
                  <NavLink
                    to="/pricing/seo-starter-pack"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Starter Pack
                  </NavLink>
                  <NavLink
                    to="/pricing/smo-packages"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    SMO Services Packages
                  </NavLink>
                  <NavLink
                    to="/pricing/ppc-packages"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    PPC Services Packages
                  </NavLink>
                  <NavLink
                    to="/pricing/web-design-packages"
                    onClick={closeMobile}
                    className="block text-white/70 hover:text-[#25baff]"
                  >
                    Web Designing Packages
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              onClick={closeMobile}
              className="block font-medium text-white/90 hover:text-[#25baff]"
            >
              Portfolios
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobile}
              className="block font-medium text-white/90 hover:text-[#25baff]"
            >
              Contact
            </NavLink>

            {/* MOBILE CONTACT + SOCIAL (BOTTOM) */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              {/* EMAIL + TIME */}
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#25baff]">✉</span>
                  <a
                    href="mailto:info@digitalwebguider.com"
                    className="hover:text-[#a8d97c]"
                  >
                    info@digitalwebguider.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#25baff]">⏰</span>
                  <span className="hover:text-[#a8d97c]">
                    Mon – Fri: 10:00 AM – 07:00 PM
                  </span>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-6 text-xl text-white/90">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25baff]"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a8d97c]"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25baff]"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        )
      }
    </header >
  );
};

export default Header;