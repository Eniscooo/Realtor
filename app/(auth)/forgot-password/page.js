"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
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
                    marginBottom: "48px",
                    textAlign: "center",
                }}
            >
                <span
                    style={{
                        fontFamily:
                            "'Playfair Display', 'Cormorant Garamond', serif",
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#C9A84C",
                        letterSpacing: "2px",
                        fontStyle: "italic",
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
                    fontSize: "clamp(32px, 6vw, 52px)",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "12px",
                    textAlign: "center",
                }}
            >
                Forgot Password
            </h1>
            <p
                style={{
                    color: "rgba(240, 235, 225, 0.6)",
                    fontSize: "14px",
                    marginBottom: "36px",
                    textAlign: "center",
                }}
            >
                Enter your email to receive a password reset link.
            </p>

            {sent ? (
                <div style={{ textAlign: "center", maxWidth: "420px" }}>
                    <div
                        style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: "rgba(201, 168, 76, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                            fontSize: "28px",
                        }}
                    >
                        ✓
                    </div>
                    <p
                        style={{
                            color: "#C9A84C",
                            fontSize: "16px",
                            fontWeight: 600,
                            marginBottom: "8px",
                        }}
                    >
                        Reset link sent!
                    </p>
                    <p
                        style={{
                            color: "rgba(240, 235, 225, 0.6)",
                            fontSize: "14px",
                            marginBottom: "32px",
                        }}
                    >
                        Check your inbox for instructions to reset your password.
                    </p>
                    <Link
                        href="/login"
                        style={{
                            color: "#C9A84C",
                            fontSize: "14px",
                            textDecoration: "none",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        ← Back to Login
                    </Link>
                </div>
            ) : (
                <>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "16px 18px",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(201, 168, 76, 0.25)",
                                borderRadius: "10px",
                                color: "#F0EBE1",
                                fontSize: "15px",
                                outline: "none",
                                transition: "border-color 0.3s",
                                boxSizing: "border-box",
                            }}
                            onFocus={(e) =>
                                (e.target.style.borderColor = "rgba(201, 168, 76, 0.6)")
                            }
                            onBlur={(e) =>
                                (e.target.style.borderColor = "rgba(201, 168, 76, 0.25)")
                            }
                        />

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
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
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
                            Send Reset Link →
                        </button>
                    </form>

                    <Link
                        href="/login"
                        style={{
                            color: "#C9A84C",
                            fontSize: "14px",
                            textDecoration: "none",
                            fontWeight: 600,
                            marginTop: "24px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            opacity: 0.8,
                        }}
                    >
                        ← Back to Login
                    </Link>
                </>
            )}
        </div>
    );
}
