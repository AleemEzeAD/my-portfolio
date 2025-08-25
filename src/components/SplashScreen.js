import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
    const [step, setStep] = useState("welcome");

    useEffect(() => {
        const t1 = setTimeout(() => setStep("loader"), 1500); 
        const t2 = setTimeout(() => onFinish(), 3000);       
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [onFinish]);

    return (
        <div className="splash-overlay">
            {step === "welcome" && <h1 className="splash-text">Welcome to Aleem Portfolio 👋</h1>}
            {step === "loader" && <div className="splash-loader"></div>}
        </div>
    );
}
