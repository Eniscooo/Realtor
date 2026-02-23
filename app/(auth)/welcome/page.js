"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function WelcomePage() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "/background.jpg",
        "/background.jpg",
        "/background.jpg",
        "/background.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);

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
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "32px",
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
                        style={{
                            color: "#0B1510",
                            fontSize: "18px",
                            fontWeight: "bold",
                        }}
                    >
                        P
                    </span>
                </div>
                <span
                    style={{
                        fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#C9A84C",
                        letterSpacing: "2px",
                    }}
                >
                    PARADISO
                </span>
            </div>

            {/* Property Image Card */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    height: "340px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    marginBottom: "32px",
                    position: "relative",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(201, 168, 76, 0.1)",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('${slides[currentSlide]}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "background-image 0.8s ease-in-out",
                    }}
                />
                {/* Subtle overlay gradient */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "80px",
                        background:
                            "linear-gradient(to top, rgba(11,21,16,0.5), transparent)",
                    }}
                />
            </div>

            {/* Headline */}
            <h1
                style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "clamp(32px, 5vw, 52px)",
                    color: "#F0EBE1",
                    fontWeight: 400,
                    textAlign: "center",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                }}
            >
                Welcome to your{" "}
                <span
                    style={{
                        fontStyle: "italic",
                        color: "#8BC6A0",
                    }}
                >
                    future heritage
                </span>
            </h1>

            {/* Slide dots */}
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "20px",
                    marginBottom: "36px",
                }}
            >
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        style={{
                            width: i === currentSlide ? "10px" : "8px",
                            height: i === currentSlide ? "10px" : "8px",
                            borderRadius: "50%",
                            background:
                                i === currentSlide
                                    ? "#C9A84C"
                                    : "rgba(240, 235, 225, 0.25)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>

            {/* Buttons */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                }}
            >
                <button
                    onClick={() => router.push("/")}
                    style={{
                        padding: "14px 40px",
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
                    Get Started →
                </button>

                <button
                    onClick={() => router.push("/")}
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "rgba(240, 235, 225, 0.7)",
                        fontSize: "15px",
                        fontWeight: 500,
                        cursor: "pointer",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#F0EBE1")}
                    onMouseOut={(e) =>
                        (e.currentTarget.style.color = "rgba(240, 235, 225, 0.7)")
                    }
                >
                    Skip
                </button>
            </div>
        </div>
    );
}
