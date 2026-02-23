"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
    { label: "Personal Details", path: "/onboarding/consumer/personal-details" },
    { label: "Your Intent", path: "/onboarding/consumer/intent" },
    { label: "Preferences", path: "/onboarding/consumer/preferences" },
    { label: "Consent", path: "/onboarding/consumer/consent" },
];

function Stepper({ currentStep }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginBottom: "40px",
            flexWrap: "wrap",
            padding: "0 10px",
        }}>
            {steps.map((step, i) => (
                <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                    }}>
                        <div style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: i <= currentStep
                                ? "linear-gradient(135deg, #C9A84C, #E0C068)"
                                : "rgba(255,255,255,0.08)",
                            border: i <= currentStep
                                ? "none"
                                : "1px solid rgba(201, 168, 76, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: i <= currentStep ? "#0B1510" : "rgba(240,235,225,0.4)",
                            transition: "all 0.3s ease",
                        }}>
                            {i < currentStep ? "✓" : i + 1}
                        </div>
                        <span style={{
                            fontSize: "11px",
                            color: i <= currentStep ? "#C9A84C" : "rgba(240,235,225,0.4)",
                            fontWeight: i === currentStep ? 600 : 400,
                            whiteSpace: "nowrap",
                            transition: "all 0.3s ease",
                        }}>
                            {step.label}
                        </span>
                    </div>
                    {i < steps.length - 1 && (
                        <div style={{
                            width: "60px",
                            height: "2px",
                            background: i < currentStep
                                ? "#C9A84C"
                                : "rgba(201, 168, 76, 0.15)",
                            margin: "0 8px",
                            marginBottom: "20px",
                            transition: "all 0.3s ease",
                        }} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function PersonalDetailsPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        localStorage.setItem("consumer_personal", JSON.stringify(formData));
        router.push("/onboarding/consumer/intent");
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
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0B1510 0%, #162B1E 40%, #1a3325 60%, #0B1510 100%)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            padding: "40px 20px",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Decorative elements */}
            <div style={{
                position: "absolute", top: "-200px", right: "-200px",
                width: "500px", height: "500px", borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.06)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <Stepper currentStep={0} />

                {/* Title */}
                <h1 style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 4vw, 36px)",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    textAlign: "center",
                    marginBottom: "40px",
                }}>
                    Welcome to Your Premium Real Estate Journey
                </h1>

                {/* Step Label */}
                <h2 style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "22px",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "24px",
                }}>
                    Step 1: Personal Details
                </h2>

                <form onSubmit={handleNext} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}>
                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Full Name
                        </label>
                        <input
                            type="text" placeholder="John Doe" value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Email Address
                        </label>
                        <input
                            type="email" placeholder="your@email.com" value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Phone Number
                        </label>
                        <input
                            type="tel" placeholder="+44 7700 000000" value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Current Address
                        </label>
                        <input
                            type="text" placeholder="123 Main Street, London" value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "15px",
                            background: "linear-gradient(135deg, #C9A84C, #D4B65A, #E0C068)",
                            border: "none",
                            borderRadius: "30px",
                            color: "#0B1510",
                            fontSize: "16px",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 20px rgba(201, 168, 76, 0.3)",
                            marginTop: "16px",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.boxShadow = "0 6px 28px rgba(201, 168, 76, 0.45)";
                            e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.boxShadow = "0 4px 20px rgba(201, 168, 76, 0.3)";
                            e.target.style.transform = "translateY(0)";
                        }}
                    >
                        Next →
                    </button>
                </form>
            </div>
        </div>
    );
}
