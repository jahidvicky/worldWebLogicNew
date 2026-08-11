import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VscFeedback } from "react-icons/vsc";
import { FaRankingStar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";
import { SiWoocommerce } from "react-icons/si";
import { FaShopify, FaStore } from "react-icons/fa6";
import { SiJoomla } from "react-icons/si";
import {
  FaBuilding,
  FaRocket,
  FaShoppingCart,
  FaHandshake,
  FaUserTie,
  FaBullhorn,
} from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

import Banner from "../../../assets/services/wordpressDev/banner.avif";
import Img from "../../../assets/services/customwebdesign/img.avif";

import Card1 from "../../../assets/services/customwebdesign/card1.avif";
import Card2 from "../../../assets/services/customwebdesign/card2.avif";
import Card3 from "../../../assets/services/customwebdesign/card3.jpg";
import Card4 from "../../../assets/services/customwebdesign/card4.avif";
import Card5 from "../../../assets/services/customwebdesign/card5.jpg";
import Card6 from "../../../assets/services/customwebdesign/card6.avif";
import Card7 from "../../../assets/services/customwebdesign/card7.avif";
import Card8 from "../../../assets/services/customwebdesign/card8.avif";
import Card9 from "../../../assets/services/customwebdesign/card9.avif";

import Img1 from "../../../assets/services/customwebdesign/img1.avif";
import Img2 from "../../../assets/services/customwebdesign/img2.avif";
import Img3 from "../../../assets/services/customwebdesign/img3.avif";
import Img4 from "../../../assets/services/customwebdesign/img4.avif";
import Img5 from "../../../assets/services/customwebdesign/img5.avif";
import Img6 from "../../../assets/services/customwebdesign/img6.avif";

import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CustomWebsiteDesign = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionRefs = useRef([]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [openIndex, setOpenIndex] = useState(0);
  const faqRefs = useRef([]);

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(whoRef.current.children, {
        scrollTrigger: {
          trigger: whoRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.92,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
        });
      });

      sectionRefs.current.forEach((section) => {
        const items = section.querySelectorAll(".gsap-item");

        items.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const slides = [
    {
      title: "Custom Logo & Branding ",
      highlight: "Design",
      image: Card1,
      content:
        "Your logo is the first impression of your brand—so we make it powerful and memorable. Our expert designers create distinctive logos and cohesive visual identities that reflect your brand values, maintain balanced aesthetics, and ensure consistent branding across every platform.",
    },
    {
      title: "Brand-Aligned Website ",
      highlight: "Layouts",
      image: Card2,
      content:
        "Your website layout should do more than look good—it should represent your brand’s personality and purpose. We design custom layouts that align with your brand voice, strategically position visuals and calls-to-action, and guide visitors smoothly toward meaningful actions.",
    },
    {
      title: "Content ",
      highlight: "Writing",
      image: Card3,
      content:
        "Powerful websites need words that connect and convert. We craft compelling, audience-focused content that reflects your brand voice, strengthens engagement, improves search visibility, and drives action through clear, strategic messaging and impactful calls-to-action.",
    },
    {
      title: "Video ",
      highlight: "Integration",
      image: Card4,
      content:
        "Bring your website to life with high-quality, engaging video content. From brand introductions to product explainers, we seamlessly integrate optimized videos that enhance visual appeal, increase user engagement, and encourage visitors to spend more time exploring your site.",
    },
    {
      title: "Custom eCommerce Web ",
      highlight: "Design",
      image: Card5,
      content:
        "We design high-performing eCommerce websites built to convert. Our visually appealing, user-friendly online stores feature mobile-optimized product pages, seamless navigation, and secure checkout integrations—creating a smooth buying experience that maximizes sales and customer trust.",
    },
    {
      title: "Responsive Web ",
      highlight: "Design",
      image: Card6,
      content:
        "We ensure your website looks stunning and performs flawlessly on every device. With a mobile-first approach, flexible layouts, and seamless screen adaptation, we deliver a smooth and engaging experience for every visitor—anytime, anywhere.",
    },
    {
      title: "CMS ",
      highlight: "Integration",
      image: Card7,
      content:
        "We integrate flexible, user-friendly content management systems that give you complete control over your website. Easily update content anytime, manage pages effortlessly, and scale features as your business grows—without technical complexity.",
    },
    {
      title: "Hosting & Performance ",
      highlight: "Optimization",
      image: Card8,
      content:
        "Website speed and reliability directly impact user experience and search visibility. We deliver high-performance websites with secure hosting, fast load times, and maximum uptime—helping reduce bounce rates, improve SEO rankings, and ensure a smooth experience for every visitor.",
    },
    {
      title: "Website Ongoing ",
      highlight: "Maintenance",
      image: Card9,
      content:
        "We provide dedicated support and proactive maintenance to keep your website secure, updated, and running at peak performance. From regular security updates and backups to content changes and technical support, we ensure your site stays reliable and optimized at all times.",
    },
  ];

  const faqs = [
    {
      question:
        "Is custom website design worth it for SMBs or local businesses?",
      answer:
        "Absolutely. A custom website helps small and local businesses stand out from competitors, build credibility, and create a user experience tailored specifically to their target audience—leading to higher engagement and conversions.",
    },
    {
      question: "How do you understand my target audience?",
      answer:
        "We conduct in-depth research on your audience’s demographics, behavior patterns, and preferences. This allows us to design a website experience that truly connects, engages, and converts.",
    },
    {
      question: "Do you follow industry-specific design trends?",
      answer:
        "Yes. We stay updated with modern design trends and best practices while ensuring your website reflects your unique brand identity and long-term business goals.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we specialize in website redesign services. We transform outdated or underperforming websites into modern, high-performing platforms optimized for user experience and conversions.",
    },
    {
      question: "Can you migrate my existing content to the new website?",
      answer:
        "Absolutely. We ensure a smooth and secure content migration process, maintaining data integrity while minimizing downtime or disruption.",
    },
    {
      question: "Will my website be scalable as my business grows?",
      answer:
        "Yes. We build websites with a scalable architecture, allowing you to easily add new features, pages, products, or integrations as your business expands.",
    },
    {
      question: "Will my website work properly across all browsers?",
      answer:
        "Yes. We rigorously test your website across all major browsers, including Chrome, Firefox, Safari, and Edge, to ensure a consistent and seamless user experience.",
    },
  ];

  const websites = [
    {
      title: "Corporate & Enterprise Platforms",
      desc: "Robust, scalable digital ecosystems designed to strengthen credibility, streamline operations, and support long-term organizational growth.",
      icon: <FaBuilding />,
      img: Img1,
    },
    {
      title: "Startup & Growth-Focused Websites",
      desc: "High-impact websites built to validate ideas, capture early adopters, and accelerate traction in competitive markets.",
      icon: <FaRocket />,
      img: Img2,
    },
    {
      title: "High-Converting E-Commerce Stores",
      desc: "Conversion-optimized online stores engineered for seamless user journeys, secure transactions, and measurable revenue growth.",
      icon: <FaShoppingCart />,
      img: Img3,
    },
    {
      title: "Service Authority Websites",
      desc: "Trust-driven platforms that highlight expertise, showcase case studies, and consistently generate qualified leads.",
      icon: <FaHandshake />,
      img: Img4,
    },
    {
      title: "Portfolio & Personal Brand Experiences",
      desc: "Visually refined digital showcases that elevate your professional identity and position you as a market leader.",
      icon: <FaUserTie />,
      img: Img5,
    },
    {
      title: "Campaign & Landing Page Systems",
      desc: "Strategic, data-driven landing pages built to maximize sign-ups, event registrations, and campaign ROI.",
      icon: <FaBullhorn />,
      img: Img6,
    },
  ];

  const customPoints = [
    "Crafted around your unique brand identity",
    "Flexible architecture built for future growth",
    "Seamless user experience & intuitive navigation",
    "SEO-ready foundation from day one",
    "Conversion-focused design strategy",
    "Scalable for advanced integrations & features",
    "Consistent brand storytelling across pages",
    "Dedicated support tailored to your needs",
  ];

  const templatePoints = [
    "Mass-produced layouts used by many brands",
    "Restricted customization capabilities",
    "Generic UX not tailored to your audience",
    "Often lacks proper SEO structure",
    "Not built specifically for conversions",
    "Limited scalability for complex features",
    "Brand identity may feel diluted",
    "Standardized or limited support options",
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //  Auto Slide Effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // change slide every 4 sec

    return () => clearInterval(interval);
  }, [current, isPaused]);

  return (
    <div ref={rootRef} className="bg-white text-black">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[58vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#020202]/80" />

        <div
          ref={heroRef}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">Services</h1>
          <p className="mt-6 text-lg text-gray-300">Custom Website Design</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        ref={whoRef}
        className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6">
            Custom Website Design That Drives Real
            <span className="text-[#25baff]"> Business Growth</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Your website is more than a digital presence — it’s your most
            powerful sales tool. We design custom websites that not only look
            stunning but are strategically built to attract, engage, and convert
            your ideal customers. Every design decision is made with one goal in
            mind: maximizing your return on investment.
          </p>

          <p className="text-gray-600 font-bold leading-relaxed">
            What Our Custom Website Design Services Deliver
          </p>
          <div className="text-gray-700 leading-relaxed ml-8 mb-3">
            <li>Distinct Brand Identity</li>
            <li>Conversion-Driven Structure</li>
            <li>Fully Responsive Experience</li>
            <li>High-Speed Performance</li>
            <li>Smart & Intuitive Navigation</li>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            9 Strategic Benefits That Make Our Custom Website Design
            <span className="text-[#25baff]"> Drive Results</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: VscFeedback,
                head: "Stronger First Impressions",
                text: "Your website is often the first interaction potential customers have with your brand. A custom-designed website ensures it looks professional, visually compelling, and aligned with your brand identity—helping you capture attention instantly and build credibility from the very first click.",
              },
              {
                icon: VscWorkspaceTrusted,
                head: "Enhanced Brand Perception",
                text: "A custom website design ensures every visual and functional element reflects your unique brand voice and values. From typography and colors to layout and messaging, each detail works together to strengthen your identity—helping your business stand out, build credibility, and stay memorable in the minds of your audience.",
              },
              {
                icon: GrIntegration,
                head: "Better Mobile Experiences",
                text: "With more than half of web traffic coming from mobile devices, having a responsive website is no longer optional. We design your site to adapt seamlessly to every screen size—ensuring smooth navigation, fast performance, and an effortless experience so users can browse, shop, or connect with your brand anytime, anywhere.",
              },
              {
                icon: BiBookContent,
                head: "Faster Website Load Times",
                text: "Our custom websites are built with performance at the core. From clean coding to optimized assets, every element is designed to ensure fast loading speeds—reducing bounce rates, improving user experience, and keeping visitors engaged longer on your site.",
              },
              {
                icon: AiOutlineSolution,
                head: "Greater Engagement & Increased Time on Site",
                text: "Through compelling visuals, intuitive layouts, and seamless navigation, we create an immersive browsing experience that encourages users to explore deeper. The longer visitors stay engaged with your content, the stronger the connection with your brand—leading to higher conversion rates and increased repeat visits.",
              },
              {
                icon: FaRankingStar,
                head: "Higher Search Engine Rankings",
                text: "Search engines prioritize websites that are fast, well-structured, and mobile-friendly. Our custom designs are built with SEO best practices in mind—using clean code, optimized images, and structured layouts to give your website a strong technical foundation for improved visibility and higher search engine rankings.",
              },
              {
                icon: BsGraphUpArrow,
                head: "Increased Conversions & Sales",
                text: "A custom website design goes beyond aesthetics—it strategically guides visitors toward meaningful actions. From compelling calls-to-action to optimized page layouts, every element is crafted to encourage form submissions, purchases, or bookings—helping you maximize conversions and achieve a stronger return on investment.",
              },
              {
                icon: GrUserSettings,
                head: "Full Control with Easy Updates",
                text: "Your website should evolve as your business grows. With an intuitive and user-friendly CMS, you can easily update content, add new pages, or make changes anytime—without technical complexity. This gives you full control while saving time, reducing costs, and eliminating unnecessary hassle.",
              },
              {
                icon: MdOutlineAutoGraph,
                head: "Future-Proof Scalability",
                text: "Your website should grow alongside your business. Our custom-built designs are flexible and scalable, allowing you to seamlessly add new features, pages, integrations, or entire product lines as your needs evolve—without rebuilding from the ground up. This ensures long-term adaptability and sustainable digital growth.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                  shadow-lg shadow-[#25baff]/10
                  transition-all duration-500
                  hover:bg-[#25baff]
                  hover:-translate-y-3
                  hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <Icon
                    className="text-4xl text-[#25baff] mb-6 mx-auto
  group-hover:text-white transition-colors duration-300"
                  />

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-br from-[#f0f7ff] via-[#f8fbff] to-white overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Custom Website Design vs
            <span className="text-[#25baff]"> Templates</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover the smarter choice for long-term business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Custom Website Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10 transition duration-500 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-[#25baff] mb-8 text-center">
              Custom Website Design
            </h3>

            <ul className="space-y-5">
              {customPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Template Card */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg p-10 transition duration-500 hover:shadow-2xl hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
              Design Templates
            </h3>

            <ul className="space-y-5">
              {templatePoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <FaTimesCircle className="text-red-400 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* contact us  */}

      <section
        ref={addSectionRef}
        className="relative py-24 px-6"
        style={{ backgroundColor: "#020202" }}
      >
        <div
          className="absolute inset-0 
   bg-[radial-gradient(circle_at_20%_20%,rgba(37,186,255,0.25),transparent_45%),
radial-gradient(circle_at_80%_80%,rgba(168,217,124,0.2),transparent_45%)]

    animate-pulseSlow"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#25baff]
 rounded-full opacity-40 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="gsap-item text-white text-3xl font-extrabold max-w-4xl">
            Make Your First Impression Count with a Stunning Website!
          </h2>

          <NavLink to="/contact">
            <button className="bg-[#25baff] cursor-pointer text-[#020202] px-6 py-3 rounded-full font-semibold hover:bg-[#a8d97c] transition">
              Contact Now
            </button>
          </NavLink>
        </div>
      </section>

      {/* ALTERNATE SECTION  */}
      <section
        className="bg-[#f0f9ff] py-24 px-6 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
            Our Professional Custom Website Design
            <span className="text-[#25baff]"> Services</span>
          </h2>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mt-4">
            We create high-impact websites that elevate your brand, engage
            visitors, and drive real results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Slides */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${index === current
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 translate-x-10"
                  }`}
              >
                {/* White Premium Card */}
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 relative inline-block">
                        {slide.title.split("&")[0]} &
                        <span className="text-[#25baff] ml-2">
                          {slide.highlight}
                        </span>
                        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#25baff] rounded-full"></span>
                      </h2>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#25baff] hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#25baff] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${current === index ? "bg-[#25baff] w-6" : "bg-gray-300 w-3"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1a3a] to-[#020617] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Website Solutions Built Around Your Business Model
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Every industry demands a different digital strategy. We design
            purpose-built platforms tailored to your niche, audience, and
            revenue goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {websites.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-lg transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="text-blue-400 text-3xl mb-4 flex justify-center transition duration-500 group-hover:scale-125 group-hover:text-blue-300">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/40 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      </section>

      {/* ================= STRATEGY CARDS ================= */}
      <section className="bg-white py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] p-4">
            Custom CMS Development Services for WordPress,
            <span className="text-[#25baff]"> Magento, Shopify & More</span>
          </h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaWordpress,
                head: "WordPress Development",
                text: "WordPress powers millions of websites worldwide because of its flexibility and powerful ecosystem. Whether you need a blog, business site, or portfolio, we build fully customized WordPress websites with tailored themes, plugins, and features—designed to match your brand, support your goals, and scale as you grow.",
              },
              {
                icon: FaStore,
                head: "Magento Development Services",
                text: "Magento is a powerful eCommerce platform built for large-scale and high-growth online businesses. We develop fully customized Magento stores with advanced features, seamless integrations, and scalable architecture—helping you manage complex inventories, enhance customer experiences, and grow your online store with confidence.",
              },
              {
                icon: SiJoomla,
                head: "Joomla Development",
                text: "Joomla is a flexible CMS ideal for content-rich and multi-user websites. Our development team creates tailored Joomla solutions with structured content management, advanced access controls, and scalable extensions—designed to meet your specific business and industry requirements.",
              },
              {
                icon: FaShopify,
                head: "Shopify Development",
                text: "Shopify is a leading platform for launching and scaling eCommerce stores with ease. We design sleek, high-converting Shopify storefronts with secure payment integrations, streamlined shipping solutions, and custom features—built to support your growth and deliver a seamless shopping experience.",
              },
              {
                icon: SiWoocommerce,
                head: "WooCommerce Development",
                iconSize: "text-9xl",
                text: "Transform your WordPress website into a powerful online store with our WooCommerce development services. We create seamless shopping experiences with secure checkouts, simple product management, and scalable features—fully tailored to your products, customers, and business goals.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-lg shadow-[#25baff]/10 transition-all duration-500 hover:bg-[#25baff] hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40"
                >
                  <div className="mb-6 mx-auto flex items-center justify-center h-14">
                    <Icon
                      className={`${item.iconSize || "text-4xl"} text-[#25baff] group-hover:text-white transition-colors duration-300`}
                    />
                  </div>

                  <h3 className="font-extrabold text-xl mb-3 text-[#020202] group-hover:text-white transition-colors duration-300">
                    {item.head}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#a8d97c] py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-3">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202]">
              What Our Clients
              <span className="text-[#25baff]"> Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "Professional execution and outstanding results. Our digital growth has significantly improved.",
                name: "Kashvi Kahal",
                role: "Marketing Director",
              },
              {
                text: "Their branding and online strategy completely transformed our visibility.",
                name: "Yumlembam Sanajaoba Meitei",
                role: "Founder",
              },
              {
                text: "Reliable team with consistent performance delivery. Highly recommended.",
                name: "Paul Casper",
                role: "Operations Manager",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-10 text-center
                shadow-lg shadow-[#25baff]/10
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#25baff]/40 hover:border-[#25baff]"
              >
                <div className="flex justify-center text-5xl mb-6 text-gray-500 group-hover:text-[#25baff] transition-colors duration-300">
                  <RiDoubleQuotesL />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                <h4 className="font-bold text-lg text-[#020202]">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={addSectionRef} className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="gsap-item text-4xl font-extrabold text-[#020202] mb-12 text-center">
            Frequently Asked
            <span className="text-[#25baff]"> Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="gsap-item bg-white border border-gray-200 rounded-2xl
                shadow-lg shadow-[#25baff]/20
                hover:shadow-2xl hover:shadow-[#25baff]/40
                hover:border-[#25baff]
                transition-all duration-300"
              >
                <button
                  onClick={() => {
                    const el = faqRefs.current[index];
                    const content = el.querySelector(".faq-content");

                    if (activeFaq === index) {
                      gsap.to(content, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                      });
                      setActiveFaq(null);
                    } else {
                      if (activeFaq !== null) {
                        const prevEl = faqRefs.current[activeFaq];
                        const prevContent =
                          prevEl.querySelector(".faq-content");

                        gsap.to(prevContent, {
                          height: 0,
                          opacity: 0,
                          duration: 0.3,
                          ease: "power2.inOut",
                        });
                      }

                      gsap.to(content, {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                      });

                      setActiveFaq(index);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#020202]"
                >
                  <span
                    className={`${activeFaq === index ? "text-[#25baff]" : "text-[#020202]"
                      } transition-colors duration-300`}
                  >
                    {faq.question}
                  </span>

                  {activeFaq === index ? (
                    <FiMinus className="text-[#25baff] text-xl" />
                  ) : (
                    <FiPlus className="text-gray-500 text-xl" />
                  )}
                </button>

                <div className="faq-content h-0 overflow-hidden px-6 opacity-0">
                  <p className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebsiteDesign;
