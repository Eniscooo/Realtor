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

export default function IntentPage() {
    const router = useRouter();
    const [intent, setIntent] = useState("");

    const handleNext = (e) => {
        e.preventDefault();
        if (!intent) return;
        localStorage.setItem("consumer_intent", JSON.stringify({ intent }));
        router.push("/onboarding/consumer/preferences");
    };

    const intentOptions = ["Buy", "Rent", "Shortlet"];

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0B1510 0%, #162B1E 40%, #1a3325 60%, #0B1510 100%)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            padding: "40px 20px",
            position: "relative",
            overflow: "hidden",
        }}>
            <div style={{
                position: "absolute", top: "-200px", right: "-200px",
                width: "500px", height: "500px", borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.06)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <Stepper currentStep={1} />

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

                <h2 style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "22px",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "12px",
                }}>
                    Step 2: Your Intent
                </h2>
                <p style={{
                    color: "rgba(240, 235, 225, 0.5)",
                    fontSize: "14px",
                    marginBottom: "28px",
                }}>
                    What are you looking to do?
                </p>

                <form onSubmit={handleNext}>
                    <div style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "32px",
                        flexWrap: "wrap",
                    }}>
                        {intentOptions.map((option) => (
                            <button
                                type="button"
                                key={option}
                                onClick={() => setIntent(option)}
                                style={{
                                    padding: "12px 32px",
                                    borderRadius: "30px",
                                    border: intent === option
                                        ? "none"
                                        : "1px solid rgba(201, 168, 76, 0.3)",
                                    background: intent === option
                                        ? "linear-gradient(135deg, #C9A84C, #E0C068)"
                                        : "rgba(255,255,255,0.05)",
                                    color: intent === option ? "#0B1510" : "#C9A84C",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: "flex", gap: "12px" }}>
                        <button
                            type="button"
                            onClick={() => router.push("/onboarding/consumer/personal-details")}
                            style={{
                                flex: 1,
                                padding: "15px",
                                background: "transparent",
                                border: "1px solid rgba(201, 168, 76, 0.3)",
                                borderRadius: "30px",
                                color: "#C9A84C",
                                fontSize: "16px",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            ← Back
                        </button>
                        <button
                            type="submit"
                            style={{
                                flex: 1,
                                padding: "15px",
                                background: intent
                                    ? "linear-gradient(135deg, #C9A84C, #D4B65A, #E0C068)"
                                    : "rgba(201, 168, 76, 0.2)",
                                border: "none",
                                borderRadius: "30px",
                                color: intent ? "#0B1510" : "rgba(240,235,225,0.3)",
                                fontSize: "16px",
                                fontWeight: 700,
                                cursor: intent ? "pointer" : "not-allowed",
                                transition: "all 0.3s ease",
                                boxShadow: intent ? "0 4px 20px rgba(201, 168, 76, 0.3)" : "none",
                            }}
                        >
                            Next →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
