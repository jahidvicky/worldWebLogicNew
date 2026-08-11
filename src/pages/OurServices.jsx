import { useState, useRef } from "react";
import {
    FaMobileAlt,
    FaRobot,
    FaCode,
    FaBullhorn,
    FaBug,
    FaCloud,
} from "react-icons/fa";
import video from "../assets/video/video.mp4"


/* ================= ICON MAP ================= */
const iconMap = {
    "Flutter Apps": FaMobileAlt,
    "React Native": FaMobileAlt,
    "Android Apps": FaMobileAlt,
    "iOS / iPhone Apps": FaMobileAlt,

    "Artificial Intelligence": FaRobot,
    "Data Science": FaRobot,
    "AWS AI/ML": FaCloud,
    "Google Cloud AI/ML": FaCloud,

    "Custom Development": FaCode,
    "API Design & REST Services": FaCode,
    "Hire Dedicated Team": FaCode,

    "SEO Services": FaBullhorn,
    "Social Media Marketing": FaBullhorn,
    "Pay Per Click Services": FaBullhorn,

    "Automation Testing": FaBug,
    "Web Application Testing": FaBug,
    "Mobile App Testing": FaBug,
};

/* ================= SERVICES DATA ================= */
const servicesData = {
    "Mobility Solution": [
        {
            title: "Flutter Apps",
            desc: "Cross-platform Flutter apps that save time and deliver smooth performance.",
            icon: <FaMobileAlt />,
        },
        {
            title: "React Native",
            desc: "High-performance mobile apps using React Native technology.",
            icon: <FaMobileAlt />,
        },
        {
            title: "Android Apps",
            desc: "Secure, scalable Android applications with modern frameworks.",
            icon: <FaMobileAlt />,
        },
        {
            title: "iOS / iPhone Apps",
            desc: "Optimized iOS apps using Apple’s latest technologies.",
            icon: <FaMobileAlt />,
        },
    ],

    "AI / ML Solution": [
        {
            title: "Artificial Intelligence",
            desc: "AI systems that simulate human intelligence for smarter decisions.",
            icon: <FaRobot />,
        },
        {
            title: "Data Science",
            desc: "Transform raw data into meaningful insights and predictions.",
            icon: <FaRobot />,
        },
        {
            title: "AWS AI/ML",
            desc: "Deploy scalable machine learning solutions on AWS.",
            icon: <FaCloud />,
        },
        {
            title: "Google Cloud AI/ML",
            desc: "Advanced AI models built on Google Cloud infrastructure.",
            icon: <FaCloud />,
        },
    ],

    "Software Development": [
        {
            title: "Custom Development",
            desc: "Tailor-made software solutions built for your business needs.",
            icon: <FaCode />,
        },
        {
            title: "API Design & REST Services",
            desc: "Robust APIs for seamless system integration.",
            icon: <FaCode />,
        },
        {
            title: "Hire Dedicated Team",
            desc: "Dedicated developers focused entirely on your project.",
            icon: <FaCode />,
        },
    ],

    "Digital Marketing": [
        {
            title: "SEO Services",
            desc: "Improve organic rankings and long-term visibility.",
            icon: <FaBullhorn />,
        },
        {
            title: "Social Media Marketing",
            desc: "Engage users and grow your brand on social platforms.",
            icon: <FaBullhorn />,
        },
        {
            title: "Pay Per Click Services",
            desc: "Data-driven PPC campaigns to boost conversions.",
            icon: <FaBullhorn />,
        },
    ],

    "Software Testing": [
        {
            title: "Automation Testing",
            desc: "Reduce manual effort with automated testing solutions.",
            icon: <FaBug />,
        },
        {
            title: "Web Application Testing",
            desc: "Ensure cross-browser and platform compatibility.",
            icon: <FaBug />,
        },
        {
            title: "Mobile App Testing",
            desc: "Deliver flawless mobile app performance.",
            icon: <FaBug />,
        },
    ],
};

/* ================= COMPONENT ================= */
const OurServices = () => {
    const categories = Object.keys(servicesData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const buttonRefs = useRef([]);


    return (
        <section className="relative py-20 text-white overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                {/* Replace this path later with your real video */}
            </video>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-[#25baff] font-bold uppercase text-lg tracking-widest">
                        Our Services
                    </p>
                    <h2 className="text-4xl font-semibold text-white">
                        What We Provide
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Sidebar */}
                    <div
                        className="
                lg:space-y-3
                flex lg:flex-col
                overflow-x-auto lg:overflow-visible
                gap-3
                pb-2
            "
                    >
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                ref={(el) => (buttonRefs.current[index] = el)}
                                onMouseEnter={() => {
                                    setActiveCategory(cat);
                                    buttonRefs.current[index]?.scrollIntoView({
                                        behavior: "smooth",
                                        inline: "center",
                                        block: "nearest",
                                    });
                                }}
                                onFocus={() => {
                                    setActiveCategory(cat);
                                }}
                                className={`flex-shrink-0
                text-left px-5 py-3 rounded-md font-medium transition-all duration-300 border-l-4
                min-w-[180px] lg:min-w-full
                ${activeCategory === cat
                                        ? "bg-[#25baff] text-white border-[#a8d97c] hover:cursor-pointer"
                                        : "bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-[#25baff]/30 hover:cursor-pointer"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {servicesData[activeCategory].map((item, index) => {
                            const BgIcon = iconMap[item.title];

                            return (
                                <div
                                    key={index}
                                    className="relative overflow-hidden group rounded-xl 
                            bg-white/10 backdrop-blur-md border border-white/20 p-6
                            transition-all duration-500 cursor-pointer
                            hover:border-[#25baff] hover:shadow-lg"
                                >

                                    {/* Animated Background */}
                                    <div
                                        className="absolute inset-0 bg-[#25baff]/20
                                scale-y-0 origin-bottom
                                transition-transform duration-500 ease-out
                                group-hover:scale-y-100"
                                    />

                                    {/* Background Icon */}
                                    <div
                                        className="absolute right-4 bottom-4 text-[120px] text-[#25baff]/10
                                transition-all duration-500
                                group-hover:scale-110 group-hover:text-[#25baff]/20"
                                    >
                                        {BgIcon && <BgIcon />}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="mb-4">
                                            <div
                                                className="h-12 w-12 flex items-center justify-center rounded-lg
                                        bg-[#25baff]/20 text-[#25baff] text-2xl
                                        transition-all duration-700 ease-out
                                        group-hover:rotate-[360deg]
                                        group-hover:bg-[#a8d97c]/30"
                                            >
                                                {item.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#25baff]">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>

    );
};

export default OurServices;