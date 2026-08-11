import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Banner from "../assets/banner.jpg"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import API from "../api/API";
import Swal from "sweetalert2";



/* ─── tiny helpers ─── */
const Label = ({ children }) => (
    <label className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-1.5">
        {children}
    </label>
);

const inputCls =
    "w-full bg-[#f9f7f4] border border-[#e5e0d8] rounded-lg px-3.5 py-3 text-sm text-gray-900 outline-none transition-all duration-200 hover:border-[#25baff] focus:border-[#25baff] focus:bg-white focus:ring-2 focus:ring-[#25baff]/10 placeholder:text-gray-300 appearance-none";


/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function FreeConsultation() {

    const [loading, setLoading] = useState(false);
    const [shaking, setShaking] = useState(false);


    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "IN",
        consultationType: "",
        date: "",
        time: "",
        timeZone: "IST (UTC+5:30)",
        message: "",
    });



    /* refs */
    const heroTagRef = useRef(null);
    const heroH1Ref = useRef(null);
    const heroSubRef = useRef(null);
    const copyRef = useRef(null);
    const cardRef = useRef(null);

    /* ── GSAP ── */
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroTagRef.current) {
            tl.fromTo(heroTagRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.15 });
        }

        if (heroH1Ref.current) {
            tl.fromTo(heroH1Ref.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.4");
        }

        if (heroSubRef.current) {
            tl.fromTo(heroSubRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
        }

        if (copyRef.current) {
            gsap.fromTo(copyRef.current,
                { opacity: 0, x: -24 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: copyRef.current, start: "top 82%" }
                }
            );
        }

        if (cardRef.current) {
            gsap.fromTo(cardRef.current,
                { opacity: 0, y: 36 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.85,
                    ease: "power3.out",
                    scrollTrigger: { trigger: cardRef.current, start: "top 82%" }
                }
            );
        }

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    /* field change */
    const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

    /* submit */
    const handleSubmit = async () => {
        if (!form.fullName || !form.email || !form.consultationType || !form.date || !form.time) {
            setShaking(true);
            setTimeout(() => setShaking(false), 450);
            return;
        }

        try {
            setLoading(true);

            const response = await API.post("/book-consultation", {
                fullName: form.fullName,
                email: form.email,
                phone: form.phone,
                countryCode: form.countryCode,
                consultationType: form.consultationType,
                date: form.date,
                time: form.time,
                timeZone: form.timeZone,
                message: form.message,
            });

            if (response.status !== 201) {
                throw new Error(response.data?.message || "Something went wrong");
            }

            // ✅ Reset form first
            setForm({
                fullName: "",
                email: "",
                phone: "",
                countryCode: "IN",
                consultationType: "",
                date: "",
                time: "",
                timeZone: "IST (UTC+5:30)",
                message: "",
            });


            // ✅ Then show success alert
            await Swal.fire({
                icon: "success",
                title: "Booking Confirmed",
                text: "We'll contact you shortly!",
                confirmButtonColor: "#25baff",
            });

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    const today = new Date().toISOString().split("T")[0];

    /* ── RENDER ── */
    return (
        <div className="font-dm bg-white overflow-x-hidden">

            {/* ════════════════════ BANNER ════════════════════ */}
            <section className="relative h-120 grid" style={{ gridTemplateColumns: "1fr 1fr" }}>

                {/* LEFT – dark panel */}
                <div
                    className="relative flex flex-col justify-center overflow-hidden z-10"
                    style={{
                        background: "#0D0F14",
                        padding: "80px 64px",
                    }}
                >
                    {/* grid overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(201,151,58,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,.07) 1px,transparent 1px)",
                            backgroundSize: "56px 56px",
                        }}
                    />
                    {/* radial glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 70% 50% at 20% 60%,rgba(201,151,58,.18) 0%,transparent 65%)",
                        }}
                    />
                    {/* deco circles */}
                    <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: 420, height: 420, right: -140, top: -140,
                            background: "radial-gradient(circle,rgba(201,151,58,.15) 0%,transparent 70%)",
                        }}
                    />
                    <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: 220, height: 220, left: -55, bottom: -55,
                            background: "radial-gradient(circle,rgba(61,90,76,.35) 0%,transparent 70%)",
                        }}
                    />

                    {/* eyebrow */}
                    <div
                        ref={heroTagRef}
                        className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
                        style={{ color: "#25baff", opacity: 0 }}
                    >
                        <span style={{ width: 28, height: 1, background: "#25baff", display: "inline-block" }} />
                        Free Consultation
                    </div>

                    {/* H1 */}
                    <h1
                        ref={heroH1Ref}
                        className="font-black leading-[1.04] text-white mb-5"
                        style={{ fontSize: "clamp(30px,4.5vw,54px)", letterSpacing: -1.5, opacity: 0 }}
                    >
                        Clarity that<br />moves your<br />
                        <em style={{ color: "#a8d97c", fontStyle: "italic" }}>business forward</em>
                    </h1>

                    {/* sub */}
                    <p
                        ref={heroSubRef}
                        className="text-[16px] font-light leading-[1.75] mb-11"
                        style={{ color: "rgba(255,255,255,.55)", maxWidth: 400, opacity: 0 }}
                    >
                        A focused 45-minute session with a senior advisor. Leave with a real action plan — zero sales pitch, zero obligation.
                    </p>
                </div>

                {/* RIGHT – image */}
                <div className="relative overflow-hidden">
                    <img
                        src={Banner}
                        alt="Expert consultation"
                        className="w-full h-full object-cover"
                        style={{ transform: "scale(1.04)", transition: "transform 8s ease" }}
                        onLoad={(e) => (e.target.style.transform = "scale(1)")}
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to right,rgba(13,15,20,.4) 0%,transparent 55%)" }}
                    />
                </div>
            </section>

            {/* shimmer divider */}
            <div
                style={{
                    height: 2,
                    background: "linear-gradient(90deg,transparent,#25baff,transparent)",
                    backgroundSize: "200% auto",
                    animation: "shimmer 3s linear infinite",
                }}
            />

            {/* ════════════════════ FORM SECTION ════════════════════ */}
            <section className="bg-white py-24 px-16">
                <div
                    className="max-w-5xl mx-auto grid gap-20 items-start"
                    style={{ gridTemplateColumns: "1fr 1.4fr" }}
                >

                    {/* Left copy */}
                    <div ref={copyRef} style={{ opacity: 0 }} className="mt-15">
                        <div
                            className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[.18em] uppercase mb-5"
                            style={{ color: "#25baff" }}
                        >
                            <span style={{ width: 24, height: 1, background: "#25baff", display: "inline-block" }} />
                            Book Your Session
                        </div>
                        <h2
                            className="font-bold leading-[1.1] text-gray-900 mb-4"
                            style={{ fontSize: "clamp(30px,3vw,44px)", letterSpacing: -0.5 }}
                        >
                            One call can{" "}
                            <span style={{ color: "#3d5a4c", fontStyle: "italic" }}>change everything</span>
                        </h2>
                        <p className="text-[15px] text-gray-500 leading-[1.75] font-light mb-9">
                            Most businesses don't struggle from lack of effort — they lack clear direction. Our advisors cut through the noise and give you a crisp roadmap in a single call.
                        </p>
                        <div className="flex flex-col gap-3.5">
                            {[
                                { icon: "✓", text: "Personalised strategy, not a template" },
                                { icon: "⚡", text: "Slots available within 48 hours" },
                                { icon: "🔒", text: "Fully confidential, NDA-protected" },
                                { icon: "0", text: "Zero obligation, genuinely free" },
                            ].map((p) => (
                                <div key={p.text} className="flex items-center gap-3 text-sm text-gray-800">
                                    <div
                                        className="w-6 h-6 rounded-md flex items-center justify-center text-[12px] flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg,#25baff,#a8d97c)" }}
                                    >
                                        {p.icon}
                                    </div>
                                    {p.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form card */}
                    <div
                        ref={cardRef}
                        className={`rounded-2xl border border-[#e5e0d8] overflow-hidden relative ${shaking ? "animate-[shake_.4s_ease]" : ""}`}
                        style={{
                            boxShadow: "0 24px 64px rgba(0,0,0,.07),0 4px 16px rgba(0,0,0,.04)",
                            opacity: 0,
                        }}
                    >
                        {/* top bar */}
                        <div style={{ height: 3, background: "linear-gradient(90deg,#25baff,#a8d97c,#020202)" }} />

                        <div className="p-10">

                            <>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Free Session</h3>

                                {/* Row 1 — Name + Email */}
                                <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                                    <div>
                                        <Label>Full Name *</Label>
                                        <input className={inputCls} type="text" placeholder="Your name" value={form.fullName} onChange={set("fullName")} />
                                    </div>
                                    <div>
                                        <Label>Email *</Label>
                                        <input className={inputCls} type="email" placeholder="example@company.com" value={form.email} onChange={set("email")} />
                                    </div>
                                </div>

                                {/* Row 2 — Phone + Type */}
                                <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                                    <div>
                                        <Label>Phone Number</Label>
                                        <div className="relative">
                                            <PhoneInput
                                                country={"in"}
                                                value={form.phone}
                                                onChange={(phone, country) => {
                                                    setForm((f) => ({
                                                        ...f,
                                                        phone: phone,
                                                        countryCode: country.countryCode.toUpperCase(),
                                                    }));
                                                }}
                                                enableSearch={true}
                                                disableSearchIcon={true}
                                                containerClass="phone-container"
                                                inputClass="phone-input"
                                                buttonClass="phone-button"
                                                dropdownClass="phone-dropdown"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Consultation Type *</Label>
                                        <select className={inputCls} value={form.consultationType} onChange={set("consultationType")}>
                                            <option value="" disabled>Select a topic</option>
                                            {["Business Strategy", "Marketing & Growth", "Financial Planning", "Operations & Scaling", "Digital Transformation", "HR & Leadership", "Other"].map(o => (
                                                <option key={o}>{o}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3 — Date + Time + Timezone */}
                                <div className="grid grid-cols-3 gap-3 mb-3.5">
                                    <div>
                                        <Label>Select Date</Label>
                                        <input className={inputCls} type="date" min={today} value={form.date} onChange={set("date")} />
                                    </div>
                                    <div>
                                        <Label>Select Time</Label>
                                        <select className={inputCls} value={form.time} onChange={set("time")}>
                                            <option value="" disabled>Time</option>
                                            {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"].map(t => (
                                                <option key={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <Label>Time Zone</Label>
                                        <select className={inputCls} value={form.timeZone} onChange={set("timeZone")}>
                                            {["IST (UTC+5:30)", "EST (UTC-5)", "PST (UTC-8)", "GMT (UTC+0)", "CET (UTC+1)"].map(z => (
                                                <option key={z}>{z}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4 — Message */}
                                <div className="mb-0">
                                    <Label>Message</Label>
                                    <textarea
                                        className={inputCls}
                                        rows={3}
                                        placeholder="Tell us briefly about your business and what you'd like to discuss…"
                                        style={{ resize: "none" }}
                                        value={form.message}
                                        onChange={set("message")}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full mt-5 py-4 rounded-lg text-white font-semibold text-[15px] tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 hover:cursor-pointer"
                                    style={{
                                        background: "#25baff",
                                        boxShadow: loading ? "none" : undefined,
                                    }}
                                    onMouseEnter={e => {
                                        if (!loading) {
                                            e.target.style.background = "#a8d97c";
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.background = "#25baff";
                                        e.target.style.boxShadow = "none";
                                    }}
                                >
                                    {loading ? "Booking your session…" : "Schedule My Free Consultation →"}
                                </button>
                            </>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}