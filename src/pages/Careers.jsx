import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaClock,
    FaChevronDown,
    FaArrowRight,
    FaHeartbeat,
    FaGraduationCap,
    FaLaptopHouse,
    FaUsers,
    FaPiggyBank,
    FaUmbrellaBeach,
} from "react-icons/fa";

/* ================= PERKS DATA ================= */
const perks = [
    {
        title: "Health Insurance",
        desc: "Comprehensive medical coverage for you and your family.",
        icon: <FaHeartbeat />,
    },
    {
        title: "Learning & Growth",
        desc: "Certifications, courses, and mentorship to grow your career.",
        icon: <FaGraduationCap />,
    },
    {
        title: "Remote Friendly",
        desc: "Flexible work-from-home and hybrid options.",
        icon: <FaLaptopHouse />,
    },
    {
        title: "Great Team Culture",
        desc: "A collaborative, supportive, and inclusive workplace.",
        icon: <FaUsers />,
    },
    {
        title: "Performance Bonus",
        desc: "Rewarding hard work with performance-based bonuses.",
        icon: <FaPiggyBank />,
    },
    {
        title: "Paid Time Off",
        desc: "Generous paid leave to help you recharge.",
        icon: <FaUmbrellaBeach />,
    },
];

/* ================= OPEN POSITIONS DATA ================= */
const jobOpenings = [
    {
        title: "React / React Native Developer",
        department: "Development",
        type: "Full-Time",
        location: "Remote / On-site",
        desc: "We are looking for a skilled React & React Native developer to build and maintain high-performance web and mobile applications.",
        responsibilities: [
            "Develop responsive UI using React.js and Tailwind CSS",
            "Build cross-platform mobile apps using React Native",
            "Collaborate with backend team on API integration",
            "Write clean, maintainable, and testable code",
        ],
        requirements: [
            "1-3 years of experience with React.js / React Native",
            "Strong understanding of JavaScript (ES6+)",
            "Familiarity with REST APIs and Git",
            "Good problem-solving skills",
        ],
    },
    {
        title: "SEO Executive",
        department: "Digital Marketing",
        type: "Full-Time",
        location: "On-site",
        desc: "We are hiring an SEO Executive to plan and execute on-page and off-page optimization strategies for client websites.",
        responsibilities: [
            "Perform keyword research and competitor analysis",
            "Optimize website content for search engines",
            "Build quality backlinks and monitor rankings",
            "Prepare monthly SEO performance reports",
        ],
        requirements: [
            "1-2 years of hands-on SEO experience",
            "Knowledge of Google Search Console, Ahrefs/SEMrush",
            "Understanding of on-page & technical SEO",
            "Good communication skills",
        ],
    },
    {
        title: "UI / UX Designer",
        department: "Design",
        type: "Full-Time",
        location: "Remote",
        desc: "We are looking for a creative UI/UX Designer who can design intuitive, user-friendly interfaces for web and mobile products.",
        responsibilities: [
            "Design wireframes, prototypes, and high-fidelity mockups",
            "Collaborate with developers to ensure design feasibility",
            "Conduct user research and usability testing",
            "Maintain design consistency across products",
        ],
        requirements: [
            "Proficiency in Figma / Adobe XD",
            "Strong portfolio showcasing UI/UX projects",
            "Understanding of responsive design principles",
            "Good eye for detail and aesthetics",
        ],
    },
    {
        title: "Business Development Executive",
        department: "Sales",
        type: "Full-Time",
        location: "On-site",
        desc: "We are seeking a Business Development Executive to identify new business opportunities and build client relationships.",
        responsibilities: [
            "Generate leads through various channels",
            "Pitch company services to potential clients",
            "Negotiate and close deals",
            "Maintain long-term client relationships",
        ],
        requirements: [
            "1-3 years of experience in B2B sales",
            "Excellent communication and negotiation skills",
            "Self-motivated and target-driven",
            "Experience in IT/Digital Marketing sales is a plus",
        ],
    },
];

const departments = ["All", ...new Set(jobOpenings.map((job) => job.department))];

/* ================= JOB CARD ================= */
function JobCard({ job }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            layout
            className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden
                hover:border-[#25baff]/60 transition-all duration-300"
        >
            <button
                onClick={() => setOpen((p) => !p)}
                className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4
                    text-left p-6 hover:cursor-pointer"
            >
                <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                            <FaBriefcase className="text-[#25baff]" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                            <FaClock className="text-[#25baff]" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-[#25baff]" /> {job.location}
                        </span>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#25baff] text-lg flex-shrink-0"
                >
                    <FaChevronDown />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 overflow-hidden"
                    >
                        <div className="pb-6 border-t border-white/10 pt-4">
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                {job.desc}
                            </p>

                            <h4 className="text-white font-medium mb-2 text-sm">
                                Responsibilities
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mb-4">
                                {job.responsibilities.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>

                            <h4 className="text-white font-medium mb-2 text-sm">
                                Requirements
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mb-6">
                                {job.requirements.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>

                            <Link
                                to={`/careers/apply?role=${encodeURIComponent(job.title)}`}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium
                                    bg-gradient-to-r from-[#25baff] to-[#0a8fd6] text-white
                                    hover:shadow-lg hover:shadow-[#25baff]/30 hover:scale-[1.02]
                                    active:scale-[0.98] transition-all duration-300"
                            >
                                Apply Now <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ================= MAIN COMPONENT ================= */
export default function Careers() {
    const [activeDept, setActiveDept] = useState("All");

    const filteredJobs =
        activeDept === "All"
            ? jobOpenings
            : jobOpenings.filter((job) => job.department === activeDept);

    return (
        <section className="relative bg-[#0b0b0c] text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <div className="relative py-24 px-6 md:px-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0c] via-[#101014] to-[#0b0b0c]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs tracking-widest
                        uppercase font-semibold border border-[#25baff]/40 text-[#25baff]">
                        We're Hiring
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Build Your Career With{" "}<br />
                        <span className="text-[#25baff]">Digital WebGuider</span>
                    </h1>

                    <p className="text-gray-300 mt-5 text-sm md:text-base leading-relaxed">
                        Join a team that values creativity, growth, and impact. Explore
                        open roles and find where you fit in.
                    </p>
                </motion.div>
            </div>

            {/* ================= WHY JOIN US ================= */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
                <div className="text-center mb-12">
                    <p className="text-[#25baff] font-bold uppercase text-sm tracking-widest">
                        Why Join Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                        Perks & Benefits
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {perks.map((perk, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
                                hover:border-[#25baff]/50 transition-all duration-300"
                        >
                            <div className="h-12 w-12 flex items-center justify-center rounded-lg
                                bg-[#25baff]/15 text-[#25baff] text-xl mb-4">
                                {perk.icon}
                            </div>
                            <h3 className="text-white font-semibold mb-1">{perk.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {perk.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ================= OPEN POSITIONS ================= */}
            <div id="open-positions" className="max-w-5xl mx-auto px-6 md:px-16 py-16">
                <div className="text-center mb-10">
                    <p className="text-[#25baff] font-bold uppercase text-sm tracking-widest">
                        Careers
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                        Open Positions
                    </h2>
                </div>

                {/* Department Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {departments.map((dept, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setActiveDept(dept)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:cursor-pointer
                                ${activeDept === dept
                                    ? "bg-[#25baff] text-white border-[#25baff]"
                                    : "bg-white/5 text-gray-300 border-white/15 hover:border-[#25baff]/50"
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                {/* Job List */}
                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))
                    ) : (
                        <p className="text-center text-gray-400 text-sm">
                            No openings in this department right now.
                        </p>
                    )}
                </div>
            </div>

            {/* ================= CTA - NO MATCHING ROLE ================= */}
            <div className="max-w-4xl mx-auto px-6 md:px-16 pb-24 text-center">
                <div className="rounded-2xl p-10 bg-gradient-to-br from-[#111] to-[#050505]
                    border border-[#25baff]/20 shadow-[0_0_30px_rgba(37,186,255,0.12)]">
                    <h3 className="text-2xl font-semibold mb-3">
                        Don't see a role that fits?
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
                        We're always open to meeting talented people. Send us your resume
                        and we'll reach out when a matching opportunity opens up.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium
                            bg-gradient-to-r from-[#25baff] to-[#0a8fd6] text-white
                            hover:shadow-lg hover:shadow-[#25baff]/30 hover:scale-[1.02]
                            active:scale-[0.98] transition-all duration-300"
                    >
                        Get In Touch <FaArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </section>
    );
}