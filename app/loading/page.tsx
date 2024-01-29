"use client";

import { useEffect } from "react";
import Card from "../components/Card/Card";
import { useRouter } from "next/navigation";

export default function Loading() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/embedded-wallet");
        }, 3000);
    }, []);

    return (
        <Card gotBack isLoading>
            <div></div>
        </Card>
    );
}
