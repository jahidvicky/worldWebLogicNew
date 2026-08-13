import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaShieldAlt } from "react-icons/fa";
import logo from "../assets/DWGlogo.png";
import API from "../api/API";
import Swal from "sweetalert2";

// Shared field styling — matches the Contact page: dark glass input,
// floating label, and a fix so browser autofill stays readable.
const inputClass =
    "peer w-full border border-white/15 rounded-xl py-3.5 pl-11 pr-11 bg-black/40 text-white " +
    "focus:outline-none focus:ring-2 focus:ring-[#25baff] transition " +
    "[&:-webkit-autofill]:[-webkit-text-fill-color:#ffffff] " +
    "[&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] " +
    "[&:-webkit-autofill]:[box-shadow:inset_0_0_0px_1000px_rgba(0,0,0,0.55)]";

const labelClass =
    "absolute left-11 -top-2 text-xs text-[#25baff] bg-[#111] px-1 transition-all pointer-events-none " +
    "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 " +
    "peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#25baff]";

const iconClass =
    "absolute left-4 top-1/2 -translate-y-1/2 text-white/40 peer-focus:text-[#25baff] transition";

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleChange = (e) =>
        setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) return;

        setLoading(true);
        try {
            const res = await API.post("/auth/admin-login", loginData);

            if (res.status !== 200) {
                throw new Error(res.data?.message || "Invalid email or password");
            }

            if (res.data?.token) {
                localStorage.setItem("dwg_admin_token", res.data.token);
            }

            await Swal.fire({
                icon: "success",
                title: "Welcome back 👋",
                text: "You've successfully logged in.",
                confirmButtonColor: "#25baff",
            });

            window.location.href = "/dashboard";
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: error.message,
                confirmButtonColor: "#25baff",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0b0b0c] flex items-center justify-center overflow-hidden px-4 py-16">
            {/* Ambient glow blobs — same accent as the rest of the site */}
            <div className="pointer-events-none absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#25baff]/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#a8d97c]/10 blur-[120px]" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(37,186,255,0.15)] p-8 sm:p-10">
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#25baff_1px,transparent_1px)] [background-size:18px_18px]" />

                {/* LOGO */}
                <div className="relative flex justify-center mb-8">
                    <NavLink to="/" className="inline-flex items-center bg-white/[0.04] rounded-xl px-3 py-1.5 ring-1 ring-white/10">
                        <img src={logo} alt="Digital WebGuider Logo" className="h-30 w-auto object-cover" />
                    </NavLink>
                </div>

                <div className="relative text-center mb-8">
                    <div className="inline-flex items-center gap-2 text-[#25baff] text-xs font-semibold tracking-widest uppercase mb-3">
                        <FaShieldAlt />
                        Admin Access
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Admin Login</h3>
                    <p className="text-white/50 text-sm">Sign in to manage the dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative space-y-6">
                    <div className="relative">
                        <FaEnvelope className={iconClass} />
                        <input
                            id="admin-email"
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            placeholder=" "
                            className={inputClass}
                        />
                        <label htmlFor="admin-email" className={labelClass}>Email Address</label>
                    </div>

                    <div className="relative">
                        <FaLock className={iconClass} />
                        <input
                            id="admin-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            required
                            placeholder=" "
                            className={inputClass}
                        />
                        <label htmlFor="admin-password" className={labelClass}>Password</label>
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#25baff] transition"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#25baff] to-[#0a8fd6] hover:shadow-lg hover:shadow-[#25baff]/30 text-white py-3.5 rounded-full font-semibold tracking-wide shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
                    >
                        {loading ? "Logging in..." : "LOGIN"}
                    </button>
                </form>

                <p className="relative text-center text-xs text-white/30 mt-8">
                    Restricted area — access is limited to authorized Digital WebGuider staff.
                </p>
            </div>
        </div>
    );
}