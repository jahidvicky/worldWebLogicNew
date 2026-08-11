import { useParams, Link } from "react-router-dom";
import { projects } from "../data/project";
import { motion } from "framer-motion";

// Import only the icons you actually need (tree-shaking friendly)
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb,
    SiTypescript, SiFirebase, SiDocker, SiJavascript,
    SiHtml5, SiCss, SiBootstrap, SiWordpress, SiShopify, SiExpress, SiWoocommerce, SiMysql, SiPhp
} from "react-icons/si";
import { FaAws, FaWordpressSimple, FaLaravel } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

// Map technology name → icon component + display name
const techIconMap = {
    // Most common ones
    "React": { icon: SiReact, color: "#61DAFB", name: "React" },
    "react": { icon: SiReact, color: "#61DAFB", name: "React" },
    "Next.js": { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    "Next": { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    "Node.js": { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    "Node": { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
    "Tailwind": { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
    "MongoDB": { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    "TS": { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    "Firebase": { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    "AWS": { icon: FaAws, color: "#FF9900", name: "AWS" },
    "Amazon Web Services": { icon: FaAws, color: "#FF9900", name: "AWS" },
    "Docker": { icon: SiDocker, color: "#2496ED", name: "Docker" },
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    "JS": { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    "HTML": { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    "HTML5": { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    "CSS": { icon: SiCss, color: "#1572B6", name: "CSS3" },
    "Bootstrap": { icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    "WordPress": { icon: SiWordpress, color: "#21759B", name: "WordPress" },
    "Shopify": { icon: SiShopify, color: "#7AB55C", name: "Shopify" },
    "Express": { icon: SiExpress, color: "#000000", name: "Express" },
    "API": { icon: TbApi, color: "#000000", name: "API" },
    "FaWordpressSimple": { icon: FaWordpressSimple, color: "#000000", name: "FaWordpressSimple" },
    "SiPhp": { icon: SiPhp, color: "#8c00ff", name: "SiPhp" },
    "FaLaravel": { icon: FaLaravel, color: "#fc2904", name: "FaLaravel" },
    "SiWoocommerce": { icon: SiWoocommerce, color: "#873EFF", name: "SiWoocommerce" },
    "SiMysql": { icon: SiMysql, color: "#015B85", name: "SiMysql" },
};

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-[#020202] text-xl font-medium">
                Project not found
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-700 bg-gray-50/40 min-h-screen">
            {/* Hero / Header */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#020202] to-[#020202]/95 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-5 text-lg md:text-xl text-gray-200/90 max-w-3xl"
                    >
                        {project.description}
                    </motion.p>

                    {project.client && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-4 text-gray-300 text-lg"
                        >
                            Client: <span className="text-[#25baff] font-medium">{project.client}</span>
                        </motion.p>
                    )}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left Column – Info & Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-10 lg:sticky lg:top-25 lg:self-start"
                        >
                            {/* Technologies – with icons */}
                            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#020202] mb-6">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => {
                                        const techInfo = techIconMap[tech] || {
                                            icon: null,
                                            color: "#6B7280",
                                            name: tech,
                                        };
                                        const Icon = techInfo.icon;

                                        return (
                                            <div
                                                key={tech}
                                                className="flex items-center gap-2 bg-[#25baff]/5 border border-[#25baff]/20 px-4 py-2 rounded-lg text-sm font-medium text-[#020202]"
                                            >
                                                {Icon && (
                                                    <Icon
                                                        className="text-xl flex-shrink-0"
                                                        style={{ color: techInfo.color }}
                                                    />
                                                )}
                                                <span>{techInfo.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-4">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      inline-flex items-center px-7 py-3.5
                      bg-[#25baff] text-white font-semibold
                      rounded-lg shadow-md
                      hover:bg-[#020202] hover:shadow-lg
                      transition-all duration-300 transform hover:-translate-y-0.5
                    "
                                    >
                                        View Live Project →
                                    </a>
                                )}

                                <Link
                                    to="/projects"
                                    className="
                    inline-flex items-center px-6 py-3
                    text-[#25baff] font-semibold
                    hover:text-[#020202] hover:underline
                    transition-colors duration-300
                  "
                                >
                                    ← Back to All Projects
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column – Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-12"
                        >
                            {/* Why These Technologies */}
                            {project.whyTech?.length > 0 && (
                                <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-[#020202] mb-5">Why These Technologies?</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        {project.whyTech.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-[#25baff] text-xl font-bold mt-0.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Project Specifications */}
                            {project.specifications?.length > 0 && (
                                <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-[#020202] mb-5">Project Specifications</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        {project.specifications.map((spec, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-[#25baff] text-xl font-bold mt-0.5">•</span>
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}