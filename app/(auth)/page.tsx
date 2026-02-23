"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page redirects to the login page
export default function AuthPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/login");
    }, [router]);

    return null;
}
