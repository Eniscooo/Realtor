"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PartnerSignup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        businessType: "Agent",
        agency: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("partnerSignup", JSON.stringify(formData));
        router.push("/onboarding/partner/business-identity");
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 16px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(201, 168, 76, 0.25)",
        borderRadius: "10px",
        color: "#F0EBE1",
        fontSize: "15px",
        outline: "none",
        transition: "border-color 0.3s",
        boxSizing: "border-box" as const,
    };

    const selectStyle: React.CSSProperties = {
        ...inputStyle,
        appearance: "none" as const,
        WebkitAppearance: "none" as const,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9A84C' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
        paddingRight: "40px",
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #0B1510 0%, #162B1E 40%, #1a3325 60%, #0B1510 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "20px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative circles */}
            <div
                style={{
                    position: "absolute",
                    top: "-200px",
                    right: "-200px",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201, 168, 76, 0.06)",
                    pointerEvents: "none",
                }}
            />

            {/* Logo */}
            <div
                onClick={() => router.push("/")}
                style={{
                    cursor: "pointer",
                    marginBottom: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        width: "36px",
                        height: "36px",
                        background: "linear-gradient(135deg, #C9A84C, #E0C068)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{ color: "#0B1510", fontSize: "18px", fontWeight: "bold" }}
                    >
                        P
                    </span>
                </div>
                <span
                    style={{
                        fontFamily:
                            "'Playfair Display', 'Cormorant Garamond', serif",
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#C9A84C",
                        letterSpacing: "2px",
                    }}
                >
                    Paradiso
                </span>
            </div>

            {/* Heading */}
            <h1
                style={{
                    fontFamily:
                        "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "clamp(28px, 5vw, 42px)",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "8px",
                    textAlign: "center",
                }}
            >
                Partner with Paradiso
            </h1>
            <p
                style={{
                    color: "rgba(240, 235, 225, 0.6)",
                    fontSize: "14px",
                    marginBottom: "32px",
                    textAlign: "center",
                }}
            >
                Join our network of premium real estate professionals.
            </p>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <div>
                    <label
                        style={{
                            display: "block",
                            color: "#C9A84C",
                            fontSize: "13px",
                            fontWeight: 500,
                            marginBottom: "6px",
                        }}
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.6)")
                        }
                        onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.25)")
                        }
                    />
                </div>

                <div>
                    <label
                        style={{
                            display: "block",
                            color: "#C9A84C",
                            fontSize: "13px",
                            fontWeight: 500,
                            marginBottom: "6px",
                        }}
                    >
                        Business Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={(e) => handleChange("businessName", e.target.value)}
                        required
                        style={inputStyle}
                        onFocus={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.6)")
                        }
                        onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.25)")
                        }
                    />
                </div>

                <div>
                    <label
                        style={{
                            display: "block",
                            color: "#C9A84C",
                            fontSize: "13px",
                            fontWeight: 500,
                            marginBottom: "6px",
                        }}
                    >
                        Business Type
                    </label>
                    <select
                        value={formData.businessType}
                        onChange={(e) => handleChange("businessType", e.target.value)}
                        style={selectStyle}
                    >
                        <option value="Agent" style={{ background: "#0B1510" }}>Agent</option>
                        <option value="Landlord" style={{ background: "#0B1510" }}>Landlord</option>
                        <option value="Developer" style={{ background: "#0B1510" }}>Property Developer</option>
                        <option value="Investor" style={{ background: "#0B1510" }}>Investor</option>
                    </select>
                </div>

                <div>
                    <label
                        style={{
                            display: "block",
                            color: "#C9A84C",
                            fontSize: "13px",
                            fontWeight: 500,
                            marginBottom: "6px",
                        }}
                    >
                        Agency
                    </label>
                    <input
                        type="text"
                        placeholder="Agency Name (if applicable)"
                        value={formData.agency}
                        onChange={(e) => handleChange("agency", e.target.value)}
                        style={inputStyle}
                        onFocus={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.6)")
                        }
                        onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(201, 168, 76, 0.25)")
                        }
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "15px",
                        background:
                            "linear-gradient(135deg, #C9A84C, #D4B65A, #E0C068)",
                        border: "none",
                        borderRadius: "30px",
                        color: "#0B1510",
                        fontSize: "16px",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 20px rgba(201, 168, 76, 0.3)",
                        marginTop: "8px",
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow =
                            "0 6px 28px rgba(201, 168, 76, 0.45)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow =
                            "0 4px 20px rgba(201, 168, 76, 0.3)";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    Join as Partner →
                </button>
            </form>

            {/* Login Link */}
            <p
                style={{
                    color: "rgba(240, 235, 225, 0.6)",
                    fontSize: "14px",
                    marginTop: "24px",
                }}
            >
                Already have an account?{" "}
                <Link
                    href="/login"
                    style={{
                        color: "#C9A84C",
                        textDecoration: "none",
                        fontWeight: 600,
                    }}
                >
                    Log in
                </Link>
            </p>
        </div>
    );
}
