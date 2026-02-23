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

export default function BusinessIdentityPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        businessType: "Real Estate Agent",
        address: "",
        agencyName: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        localStorage.setItem("partner_identity", JSON.stringify(formData));
        router.push("/onboarding/partner/offering");
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

    const selectStyle = {
        ...inputStyle,
        appearance: "none",
        WebkitAppearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C9A84C' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
        paddingRight: "40px",
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
                    <span style={{
                        color: "rgba(240,235,225,0.3)",
                        fontSize: "20px",
                        margin: "0 4px",
                    }}>|</span>
                    <span style={{
                        color: "rgba(240,235,225,0.7)",
                        fontSize: "16px",
                        fontWeight: 500,
                    }}>
                        Partner Onboarding
                    </span>
                </div>

                <Stepper currentStep={0} />

                <h2 style={{
                    fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                    fontSize: "22px",
                    color: "#C9A84C",
                    fontWeight: 400,
                    fontStyle: "italic",
                    marginBottom: "24px",
                }}>
                    Step 1: Business Identity
                </h2>

                <form onSubmit={handleNext} style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                }}>
                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Full Name
                        </label>
                        <input
                            type="text" placeholder="Full Name" value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Business Name
                        </label>
                        <input
                            type="text" placeholder="Business Name" value={formData.businessName}
                            onChange={(e) => handleChange("businessName", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Business Type
                        </label>
                        <select
                            value={formData.businessType}
                            onChange={(e) => handleChange("businessType", e.target.value)}
                            style={selectStyle}
                        >
                            <option value="Real Estate Agent" style={{ background: "#0B1510" }}>Real Estate Agent</option>
                            <option value="Landlord" style={{ background: "#0B1510" }}>Landlord</option>
                            <option value="Property Developer" style={{ background: "#0B1510" }}>Property Developer</option>
                            <option value="Investor" style={{ background: "#0B1510" }}>Investor</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Address
                        </label>
                        <input
                            type="text" placeholder="Address" value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)} required
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div style={{ gridColumn: "1 / -1" }}>
                        <label style={{ display: "block", color: "#C9A84C", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                            Agency Name
                        </label>
                        <input
                            type="text" placeholder="Agency Name (if applicable)" value={formData.agencyName}
                            onChange={(e) => handleChange("agencyName", e.target.value)}
                            style={inputStyle}
                            onFocus={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.6)"}
                            onBlur={(e) => e.target.style.borderColor = "rgba(201, 168, 76, 0.25)"}
                        />
                    </div>

                    <div style={{ gridColumn: "1 / -1" }}>
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
                                marginTop: "8px",
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
                    </div>
                </form>
            </div>
        </div>
    );
}
