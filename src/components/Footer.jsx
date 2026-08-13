import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/DWGlogo.png";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) return;

        setSuccess(true);
        setEmail("");

        setTimeout(() => {
            setSuccess(false);
        }, 4000);
    };

    return (
        <footer className="relative text-white overflow-hidden pt-6">

            {/* GLASS BG */}
            <div className="absolute inset-0 bg-white/2 backdrop-blur-xl border-t border-white/10"></div>

            <div className="relative max-w-7xl mx-auto px-2 py-6">

                {/* GRID */}
                <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-cols-3 sm:grid-cols-2 gap-10 items-start">

                    {/* COLUMN 1 */}
                    <div className="min-w-[320px] mr-20">

                        {/* LOGO */}
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Digital WebGuider"
                                className="h-40 w-auto object-cover cursor-pointer"
                            />
                        </Link>

                        {/* NEWSLETTER */}
                        <h4 className="font-semibold mb-2">
                            Subscribe Newsletter
                        </h4>

                        <form onSubmit={handleSubscribe}>

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="
w-full
px-4 py-3
mb-2
rounded-lg
bg-white/10
border border-white/20
text-white
placeholder-gray-300
focus:outline-none
focus:border-[#25baff]"
                            />

                            <button
                                type="submit"
                                className="
w-full
bg-[#25baff]
hover:bg-[#a8d97c]
hover:text-black
py-3
rounded-lg
font-semibold
transition
cursor-pointer"
                            >
                                Subscribe
                            </button>

                        </form>

                        {/* SUCCESS MESSAGE */}

                        {success && (
                            <div className="mt-3 text-sm bg-green-500/20 border border-green-400 text-green-300 p-2 rounded-lg text-center">
                                Subscribed successfully! We'll keep you updated.
                            </div>
                        )}


                        {/* SOCIAL */}
                        <div className="flex gap-3 mt-5 mb-4">

                            <SocialIcon Icon={FaInstagram} link="#" />
                            <SocialIcon Icon={FaFacebookF} link="#" />
                            <SocialIcon Icon={FaLinkedinIn} link="#" />
                            <SocialIcon Icon={FaTwitter} link="#" />
                            <SocialIcon Icon={FaYoutube} link="#" />

                        </div>

                    </div>


                    {/* IMPORTANT LINKS */}
                    <FooterColumn
                        title="Important Links"
                        noWrap
                        links={[
                            { name: "Home", path: "/" },
                            { name: "Portfolio", path: "/portfolio" },
                            { name: "Who We Are", path: "/about/who-we-are" },
                            { name: "Why Choose Us", path: "/about/why-choose-us" },
                            { name: "Projects", path: "/projects" },
                            { name: "Pricing", path: "/pricing/seo-packages" },
                            { name: "Contact Us", path: "/contact" }
                        ]}
                    />

                    {/* SERVICES */}
                    <FooterColumn
                        title="Services"
                        links={[
                            { name: "Search Engine Optimization", path: "/services/seo" },
                            { name: "Small Business SEO", path: "/services/small-business-seo" },
                            { name: "Local SEO Services", path: "/services/local-seo-services" },
                            { name: "E-commerce SEO", path: "/services/ecommerce-seo" },
                            { name: "Generative Engine Optimization (GEO) Services", path: "/services/generative-engine-optimization" },
                            { name: "Answer Engine Optimization (AEO) Services", path: "/services/answer-engine-optimization" },
                            { name: "Pay Per Click Services", path: "/services/pay-per-click" },
                            { name: "Voice Search Optimization Services", path: "/services/voice-search-optimization" },
                            { name: "GBP Optimization", path: "/services/gbp-optimization" }
                        ]}
                    />



                    {/* SERVICE AREAS */}
                    <FooterColumn
                        title="Service Areas"
                        noWrap
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
                        columns={2}
                    />

                </div>
            </div>


            {/* BOTTOM BAR */}
            <div className="border-t border-white/20 bg-white/10 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center text-white">
                    © {new Date().getFullYear()} Digital WebGuider. All rights reserved.
                </div>
            </div>

        </footer>
    );
}


/* FOOTER COLUMN */

function FooterColumn({ title, links, columns = 1, noWrap = false }) {
    return (
        <div>
            {title && (
                <h4 className="
          font-semibold
          mb-4
          relative
          inline-block
          after:block
          after:w-full
          after:h-[2px]
          after:bg-[#25baff]
          after:mt-2">
                    {title}
                </h4>
            )}

            <ul
                className={`text-sm text-gray-200 ${columns === 2
                    ? "grid grid-cols-2 gap-x-10 gap-y-2"
                    : "space-y-2 break-words"
                    }`}
            >
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.path}
                            className={`hover:text-[#25baff] transition ${noWrap ? "whitespace-nowrap" : "whitespace-normal"
                                }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}



/* SOCIAL ICON */

function SocialIcon({ Icon, link }) {

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/10
            border border-white/20
            hover:bg-[#25baff]
            cursor-pointer
            transition"
        >
            <Icon size={16} />
        </a>
    );
}