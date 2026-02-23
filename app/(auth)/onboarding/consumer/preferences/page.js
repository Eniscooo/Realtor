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

export default function PreferencesPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        location: "",
        propertyType: "",
        budgetMin: 500000,
        budgetMax: 5000000,
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        localStorage.setItem("consumer_preferences", JSON.stringify(formData));
        router.push("/onboarding/consumer/consent");
    };

    const selectStyle = {
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
        appearance: "none",
        WebkitAppearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9A84C' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
        paddingRight: "40px",
    };

    const formatCurrency = (value) => {
        if (value >= 1000000) {
            return `£${(value / 1000000).toFixed(1)}M`;
        }
        return `£${(value / 1000).toFixed(0)}k`;
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

            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <Stepper currentStep={2} />

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
                    marginBottom: "24px",
                }}>
                    Step 3: Preferences
                </h2>

                <form onSubmit={handleNext} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}>
                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Preferred Location (City/Area)
                        </label>
                        <select
                            value={formData.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                            required
                            style={selectStyle}
                        >
                            <option value="" disabled style={{ background: "#0B1510" }}>Select location</option>
                            <option value="Lagos" style={{ background: "#0B1510" }}>Lagos</option>
                            <option value="Abuja" style={{ background: "#0B1510" }}>Abuja</option>
                            <option value="Rivers" style={{ background: "#0B1510" }}>Birmingham</option>
                            <option value="Kano" style={{ background: "#0B1510" }}>Leeds</option>
                            <option value="Kaduna" style={{ background: "#0B1510" }}>Edinburgh</option>
                            <option value="Ilorin" style={{ background: "#0B1510" }}>Bristol</option>
                            <option value="Ibadan" style={{ background: "#0B1510" }}>Liverpool</option>
                            <option value="Other" style={{ background: "#0B1510" }}>Other</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Property Type
                        </label>
                        <select
                            value={formData.propertyType}
                            onChange={(e) => handleChange("propertyType", e.target.value)}
                            required
                            style={selectStyle}
                        >
                            <option value="" disabled style={{ background: "#0B1510" }}>Select property type</option>
                            <option value="Apartment" style={{ background: "#0B1510" }}>Apartment</option>
                            <option value="Detached House" style={{ background: "#0B1510" }}>Detached House</option>
                            <option value="Semi-Detached" style={{ background: "#0B1510" }}>Semi-Detached</option>
                            <option value="Terraced" style={{ background: "#0B1510" }}>Terraced</option>
                            <option value="Penthouse" style={{ background: "#0B1510" }}>Penthouse</option>
                            <option value="Villa" style={{ background: "#0B1510" }}>Villa</option>
                            <option value="Cottage" style={{ background: "#0B1510" }}>Cottage</option>
                        </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "12px" }}>
                            Budget Range
                        </label>

                        <div style={{ position: "relative", marginBottom: "8px" }}>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="50000"
                                value={formData.budgetMin}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val < formData.budgetMax) handleChange("budgetMin", val);
                                }}
                                style={{
                                    width: "100%",
                                    appearance: "none",
                                    WebkitAppearance: "none",
                                    height: "4px",
                                    background: `linear-gradient(to right, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.2) ${((formData.budgetMin - 100000) / 9900000) * 100}%, #C9A84C ${((formData.budgetMin - 100000) / 9900000) * 100}%, #C9A84C ${((formData.budgetMax - 100000) / 9900000) * 100}%, rgba(201,168,76,0.2) ${((formData.budgetMax - 100000) / 9900000) * 100}%, rgba(201,168,76,0.2) 100%)`,
                                    borderRadius: "4px",
                                    outline: "none",
                                    cursor: "pointer",
                                }}
                            />
                        </div>

                        <div style={{ position: "relative", marginBottom: "8px", marginTop: "-18px" }}>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="50000"
                                value={formData.budgetMax}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val > formData.budgetMin) handleChange("budgetMax", val);
                                }}
                                style={{
                                    width: "100%",
                                    appearance: "none",
                                    WebkitAppearance: "none",
                                    height: "4px",
                                    background: "transparent",
                                    borderRadius: "4px",
                                    outline: "none",
                                    cursor: "pointer",
                                }}
                            />
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#C9A84C",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}>
                            <span>{formatCurrency(formData.budgetMin)}</span>
                            <span>{formatCurrency(formData.budgetMax)}+</span>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                        <button
                            type="button"
                            onClick={() => router.push("/onboarding/consumer/intent")}
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
                                background: "linear-gradient(135deg, #C9A84C, #D4B65A, #E0C068)",
                                border: "none",
                                borderRadius: "30px",
                                color: "#0B1510",
                                fontSize: "16px",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(201, 168, 76, 0.3)",
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
