import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import image from "../assets/building.jpg";
import API from "../api/API";
import Swal from "sweetalert2";

// Shared classes so every field (including browser-autofilled ones) stays
// dark-themed, keeps white text, and shows the floating label correctly.
const inputClass =
  "peer w-full border border-white/15 rounded-xl p-4 bg-black/40 text-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#25baff] transition " +
  "[&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff] " +
  "[&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] " +
  "[&:-webkit-autofill]:[box-shadow:inset_0_0_0px_1000px_rgba(0,0,0,0.55)] " +
  "[&:autofill]:[-webkit-text-fill-color:#ffffff]";

const labelClass =
  "absolute left-4 -top-2 text-xs text-[#25baff] bg-[#111] px-1 transition-all " +
  "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 " +
  "peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#25baff] " +
  "peer-autofill:-top-2 peer-autofill:text-xs";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  // One ref per field so clicking anywhere inside its wrapper (padding,
  // label, empty space) focuses the actual input/textarea.
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const websiteRef = useRef(null);
  const messageRef = useRef(null);

  const focusField = (ref) => (e) => {
    // Don't steal focus if the user actually clicked the input itself,
    // or clicked a link/button inside the wrapper.
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    ref.current?.focus();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnimationStart = (e) => {
    if (e.animationName === "onAutoFillStart") {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    try {
      const res = await API.post("/contact-us", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        message: formData.message
      });

      if (res.status !== 201) {
        throw new Error(res.data?.message || "Something went wrong");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });

      await Swal.fire({
        icon: "success",
        title: "Contact us successfully 🎉",
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
    }
  };

  return (
    <div className="w-full bg-[#0b0b0c]">

      {/* Autofill keyframe hook: fires a no-op animation whenever Chrome/Edge/Safari
          autofills a field, which we listen for via onAnimationStart above. */}
      <style>{`
        @keyframes onAutoFillStart { from {} to {} }
        input:-webkit-autofill { animation-name: onAutoFillStart; }
      `}</style>

      {/* CONTACT FORM */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight">
            <span className="text-white">Let’s </span>
            <span className="text-[#25baff]">Connect</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Have a project in mind? We’d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-[#25baff]/20 shadow-[0_10px_40px_rgba(37,186,255,0.15)] hover:shadow-[0_15px_50px_rgba(37,186,255,0.25)] transition-all duration-300"
        >

          {/* Name */}

          <div className="relative cursor-text" onClick={focusField(fullNameRef)}>
            <input
              ref={fullNameRef}
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onAnimationStart={handleAnimationStart}
              autoComplete="name"
              required
              placeholder=" "
              className={inputClass}
            />

            <label htmlFor="fullName" className={labelClass}>
              Full Name*
            </label>
          </div>

          {/* Email */}

          <div className="relative cursor-text" onClick={focusField(emailRef)}>
            <input
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onAnimationStart={handleAnimationStart}
              autoComplete="email"
              required
              placeholder=" "
              className={inputClass}
            />

            <label htmlFor="email" className={labelClass}>
              Email Address*
            </label>
          </div>

          {/* Phone */}

          <div className="relative cursor-text" onClick={focusField(phoneRef)}>
            <input
              ref={phoneRef}
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              onAnimationStart={handleAnimationStart}
              autoComplete="tel"
              required
              placeholder=" "
              className={inputClass}
            />

            <label htmlFor="phone" className={labelClass}>
              Phone Number*
            </label>
          </div>

          {/* Website */}

          <div className="relative cursor-text" onClick={focusField(websiteRef)}>
            <input
              ref={websiteRef}
              id="website"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              onAnimationStart={handleAnimationStart}
              autoComplete="url"
              placeholder=" "
              className={inputClass}
            />

            <label htmlFor="website" className={labelClass}>
              Website
            </label>
          </div>

          {/* Message */}

          <div className="relative cursor-text md:col-span-2" onClick={focusField(messageRef)}>
            <textarea
              ref={messageRef}
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              className={inputClass}
            />

            <label htmlFor="message" className={labelClass}>
              Write Message*
            </label>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#25baff] to-[#0a8fd6] hover:shadow-lg hover:shadow-[#25baff]/30 text-white px-10 py-3 rounded-full font-semibold tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </div>

        </form>
      </section>

      {/* MAP SECTION */}

      <section className="relative w-[85%] mx-auto pb-20">

        <div className="grid md:grid-cols-2 grid-cols-1 rounded-2xl overflow-hidden shadow-xl border border-white/10">

          <div className="h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4679426712655!2d77.37659797429282!3d28.615734284845466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d9b356b8ed%3A0x49adf36c8f202317!2sWorld%20WebLogic!5e0!3m2!1sen!2sin!4v1770200835800!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Google Map"
              className="w-full h-full"
            />
          </div>

          <div className="h-[500px] w-full relative group">
            <img
              src={image}
              alt="Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

        </div>

        <div className="absolute bottom-45 left-1/2 transform -translate-x-1/2 bg-[#111]/90 text-white p-6 rounded-2xl shadow-[0_0_30px_rgba(37,186,255,0.15)] w-[85%] md:w-[330px] backdrop-blur-sm border border-[#25baff]/20">

          <h2 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
            Head Office
          </h2>

          <div className="space-y-4 text-xs">

            <div className="flex items-start gap-3">
              <FaLocationDot className="text-[#25baff] text-lg mt-1" />
              <a
                href="https://www.google.com/maps?q=World+WebLogic,+1st+Floor,+Office+2,+B-108,+B+Block,+Sector+63,+Noida,+Uttar+Pradesh+201309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25baff] transition leading-relaxed"
              >
                B 108, Sector 63,
                <br />
                Noida – 201301
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#25baff] text-lg mt-1" />
              <div>
                <a href="tel:+911204545733" className="hover:text-[#25baff] block transition">
                  +91 120 454 5733
                </a>
                <a href="tel:+918505837801" className="hover:text-[#25baff] block transition">
                  +91 85058 37801
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#25baff] text-lg mt-1" />
              <a href="mailto:info@digitalwebguider.com" className="hover:text-[#25baff] transition">
                info@digitalwebguider.com
              </a>
            </div>

          </div>

          <div className="flex gap-4 mt-6 text-lg">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25baff] transition cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
}