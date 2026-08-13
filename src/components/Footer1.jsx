import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/DWGlogo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

/* TYPEWRITER */
function Typewriter({ text }) {
    const [display, setDisplay] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        if (i < text.length) {
            const t = setTimeout(() => {
                setDisplay((p) => p + text[i]);
                setI(i + 1);
            }, 40);
            return () => clearTimeout(t);
        }
    }, [i, text]);

    return (
        <div className="flex items-center gap-1 text-violet-400 text-xs tracking-widest uppercase">
            {display}
            <span className="animate-pulse">|</span>
        </div>
    );
}

/* NEURAL BACKGROUND */
function NeuralBG() {
    const nodes = Array.from({ length: 25 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {nodes.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-violet-500 rounded-full"
                    animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>
    );
}

/* BRAIN WAVE */
function BrainWave() {
    return (
        <motion.div className="w-full h-16 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <svg viewBox="0 0 1440 100" className="w-full h-full">
                <motion.path
                    d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    fill="transparent"
                    animate={{ pathLength: [0, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </svg>
        </motion.div>
    );
}

/* COLUMN */
function FooterColumn({ title, links, columns = 1 }) {
    return (
        <motion.div
            className="p-6 rounded-2xl bg-gradient-to-br from-[#111] to-[#050505] border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            whileHover={{ scale: 1.03 }}
        >
            <Typewriter text={title} />

            <ul
                className={`mt-4 text-sm ${columns === 2 ? "grid grid-cols-2 gap-2" : "space-y-2"}`}
            >
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink
                            to={link.path}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "text-violet-400 font-medium transition"
                                    : "text-white hover:text-violet-400 transition"
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

/* SOCIAL */
function SocialIcon({ Icon, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-violet-500/20 text-violet-400 hover:bg-violet-500/20 transition"
        >
            <Icon size={15} />
        </a>
    );
}

export default function Footer1() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <footer className="relative bg-[#0b0b0c] text-white px-6 md:px-16 pt-20 pb-10 overflow-hidden">
            <NeuralBG />

            <div className="relative z-10 max-w-7xl mx-auto">
                <BrainWave />

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                    {/* COLUMN 1 */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111] to-[#050505] border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                        <Link to="/">
                            <img src={logo} alt="footer-logo" className="h-22 w-auto object-cover" />
                        </Link>

                        <p className="text-sm text-white mt-4">
                            Powering digital growth through cloud-first SEO and intelligent web strategies.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-4">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 text-white rounded-lg bg-black/40 border border-gray-700"
                            />

                            <button className="w-full mt-3 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 hover:from-violet-700 hover:via-purple-400 hover:to-indigo-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-violet-500/40">
                                Subscribe
                            </button>
                        </form>

                        {success && (
                            <p className="text-green-400 text-xs mt-2">Subscribed!</p>
                        )}

                        <div className="flex justify-center gap-3 mt-4">
                            <SocialIcon Icon={FaInstagram} link="#" />
                            <SocialIcon Icon={FaFacebookF} link="#" />
                            <SocialIcon Icon={FaLinkedinIn} link="#" />
                        </div>
                    </div>

                    {/* IMPORTANT LINKS */}
                    <FooterColumn
                        title="Important Links"
                        links={[
                            { name: "Home", path: "/" },
                            { name: "Portfolio", path: "/portfolio" },
                            { name: "Who We Are", path: "/about/who-we-are" },
                            { name: "Why Choose Us", path: "/about/why-choose-us" },
                            { name: "Projects", path: "/projects" },
                            { name: "Pricing", path: "/pricing/seo-packages" },
                            { name: "Contact Us", path: "/contact" },
                            { name: "Career", path: "/career" }
                        ]}
                    />

                    {/* SERVICES */}
                    <FooterColumn
                        title="Services"
                        links={[
                            { name: "Search Engine Optimization (SEO)", path: "/services/seo" },
                            { name: "Small Business SEO", path: "/services/small-business-seo" },
                            { name: "Technical SEO Services", path: "/services/seo//technical-seo-services" },
                            { name: "E-commerce SEO", path: "/services/seo/ecommerce-seo-services" },
                            { name: "Generative Engine Optimization (GEO) Services", path: "/services/seo/generative-engine-optimization" },
                            { name: "Answer Engine Optimization (AEO) Services", path: "/services/seo/answer-engine-optimization" },
                            { name: "Pay Per Click Services", path: "/services/pay-per-click" },
                            { name: "Voice Search Optimization Services", path: "/services/seo/voice-search-optimization" },
                            { name: "GBP Optimization", path: "/services/gbp-optimization" }
                        ]}
                    />

                    {/* SERVICE AREAS */}
                    <FooterColumn
                        title="Service Areas"
                        columns={2}
                        links={[
                            { name: "Austin", path: "/locations/austin" },
                            { name: "Boston", path: "/locations/boston" },
                            { name: "Charlotte", path: "/locations/charlotte" },
                            { name: "Chicago", path: "/locations/chicago" },
                            { name: "Columbus", path: "/locations/columbus" },
                            { name: "Dallas", path: "/locations/dallas" },
                            { name: "Denver", path: "/locations/denver" },
                            { name: "Houston", path: "/locations/houston" },
                            { name: "Indianapolis", path: "/locations/indianapolis" },
                            { name: "Jacksonville", path: "/locations/jacksonville" },
                            { name: "Los Angeles", path: "/locations/los-angeles" },
                            { name: "Miami", path: "/locations/miami" },
                            { name: "New York", path: "/locations/new-york" },
                            { name: "Philadelphia", path: "/locations/philadelphia" },
                            { name: "Phoenix", path: "/locations/phoenix" },
                            { name: "San Antonio", path: "/locations/san-antonio" },
                            { name: "San Diego", path: "/locations/san-diego" },
                            { name: "San Francisco", path: "/locations/san-francisco" },
                            { name: "Seattle", path: "/locations/seattle" },
                            { name: "Toronto", path: "/locations/toronto" }
                        ]}
                    />
                </div>

                {/* BOTTOM */}
                <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <span className="text-xs text-white">
                        © {new Date().getFullYear()} Digital WebGuider. All rights reserved.
                    </span>
                    <div className="flex gap-4 text-xs">
                        <NavLink
                            to="/privacy-policy"
                            end
                            className={({ isActive }) =>
                                isActive ? "text-violet-400 font-medium" : "hover:text-violet-400"
                            }
                        >
                            Privacy Policy
                        </NavLink>
                        <NavLink
                            to="/terms-conditions"
                            end
                            className={({ isActive }) =>
                                isActive ? "text-violet-400 font-medium" : "hover:text-violet-400"
                            }
                        >
                            Terms and Conditions
                        </NavLink>
                        <NavLink
                            to="/cookie-policy"
                            end
                            className={({ isActive }) =>
                                isActive ? "text-violet-400 font-medium" : "hover:text-violet-400"
                            }
                        >
                            Cookie Policy
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
