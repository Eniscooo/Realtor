"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ConsumerSignup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save consumer signup data
        localStorage.setItem("consumerSignup", JSON.stringify(formData));
        router.push("/onboarding/consumer/personal-details");
    };

    const inputStyle = {
        width: "100%",
        padding: "14px 16px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(201, 168, 76, 0.25)",
        borderRadius: "10px",
        color: "#F0EBE1",
        fontSize: "15px",
        outline: "none",
        transition: "border-color 0.3s",
        boxSizing: "border-box",
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
            <div
                style={{
                    position: "absolute",
                    bottom: "-150px",
                    left: "-150px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201, 168, 76, 0.04)",
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
                    PARADISO
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
                Create Your Account
            </h1>
            <p
                style={{
                    color: "rgba(240, 235, 225, 0.6)",
                    fontSize: "14px",
                    marginBottom: "32px",
                    textAlign: "center",
                }}
            >
                Begin your premium real estate journey.
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
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
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
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+44 7700 000000"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
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
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
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
                        e.target.style.boxShadow =
                            "0 6px 28px rgba(201, 168, 76, 0.45)";
                        e.target.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.boxShadow =
                            "0 4px 20px rgba(201, 168, 76, 0.3)";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    Create Account →
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
