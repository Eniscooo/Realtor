"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
    { label: "Business Identity", path: "/onboarding/partner/business-identity" },
    { label: "Your Offering", path: "/onboarding/partner/offering" },
    { label: "Agreement", path: "/onboarding/partner/agreement" },
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
                            width: "80px",
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

export default function OfferingPage() {
    const router = useRouter();
    const [offering, setOffering] = useState("");

    const handleNext = (e) => {
        e.preventDefault();
        if (!offering.trim()) return;
        localStorage.setItem("partner_offering", JSON.stringify({ offering }));
        router.push("/onboarding/partner/agreement");
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
            <div style={{
                position: "absolute", top: "-200px", right: "-200px",
                width: "500px", height: "500px", borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.06)", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "50px", right: "50px",
                width: "200px", height: "200px", borderRadius: "12px",
                border: "1px solid rgba(201, 168, 76, 0.08)",
                transform: "rotate(45deg)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    marginBottom: "32px",
                }}>
                    <div style={{
                        width: "36px",
                        height: "36px",
                        background: "linear-gradient(135deg, #C9A84C, #E0C068)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <span style={{ color: "#0B1510", fontSize: "18px", fontWeight: "bold" }}>P</span>
                    </div>
                    <span style={{
                        fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#C9A84C",
                        fontStyle: "italic",
                    }}>
                        Paradiso
                    </span>
                    <span style={{ color: "rgba(240,235,225,0.3)", fontSize: "20px", margin: "0 4px" }}>|</span>
                    <span style={{ color: "rgba(240,235,225,0.7)", fontSize: "16px", fontWeight: 500 }}>
                        Partner Onboarding
                    </span>
                </div>

                <Stepper currentStep={1} />

                <h2 style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "22px",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "8px",
                }}>
                    Step 2: Your Offering
                </h2>
                <p style={{
                    color: "rgba(240, 235, 225, 0.5)",
                    fontSize: "14px",
                    marginBottom: "24px",
                }}>
                    What are you looking to offer on Paradiso?
                </p>

                <form onSubmit={handleNext} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}>
                    <textarea
                        placeholder="Describe your properties, services, or investment opportunities..."
                        value={offering}
                        onChange={(e) => setOffering(e.target.value)}
                        required
                        rows={6}
                        style={{
                            width: "100%",
                            padding: "16px",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(201, 168, 76, 0.25)",
                            borderRadius: "12px",
                            color: "#F0EBE1",
                            fontSize: "15px",
                            outline: "none",
                            transition: "border-color 0.3s",
                            boxSizing: "border-box",
                            resize: "vertical",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            minHeight: "150px",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                        onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                    />

                    <div style={{ display: "flex", gap: "12px" }}>
                        <button
                            type="button"
                            onClick={() => router.push("/onboarding/partner/business-identity")}
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
                                background: offering.trim()
                                    ? "linear-gradient(135deg, #C9A84C, #D4B65A, #E0C068)"
                                    : "rgba(201, 168, 76, 0.2)",
                                border: "none",
                                borderRadius: "30px",
                                color: offering.trim() ? "#0B1510" : "rgba(240,235,225,0.3)",
                                fontSize: "16px",
                                fontWeight: 700,
                                cursor: offering.trim() ? "pointer" : "not-allowed",
                                transition: "all 0.3s ease",
                                boxShadow: offering.trim() ? "0 4px 20px rgba(201, 168, 76, 0.3)" : "none",
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
