"use client";

import Image from "next/image";
import { useState } from "react";

type FooterName = "home" | "assets" | "activity";

type FooterType = {
    name: FooterName;
    icon: string;
};

const Footer = () => {
    const [footerOpen, setFooterOpen] = useState<FooterName>("home");

    const footer: FooterType[] = [
        { name: "home", icon: "/brand/icons/home.svg" },
        { name: "assets", icon: "/brand/icons/assets.svg" },
        { name: "activity", icon: "/brand/icons/clock.svg" },
    ];

    return (
        <div className="mx-auto mt-1 flex w-[55%] items-center rounded-full border border-lightPrimary/5 p-2 hover:bg-lightPrimary/10">
            {footer.map((f, i) => (
                <div
                    key={i}
                    onClick={() => setFooterOpen(f.name)}
                    className={`relative flex cursor-pointer items-center rounded-full border border-lightPrimary/10 p-2 ${f.name === footerOpen ? "bg-darkSurface-700 gap-1" : "bg-darkSurface"} ${i !== 2 && "-mr-1"}`}
                >
                    <Image src={f.icon} alt={`${f.name} icon`} width={24} height={24} />
                    <div
                        className={`max-w-0 -translate-x-full overflow-hidden whitespace-nowrap text-white opacity-0 transition-all duration-100 ease-in-out  ${f.name === footerOpen ? "animate-bumpEffect max-w-[150px] translate-x-0 opacity-100" : ""}`}
                    >
                        <div className="font-semibold capitalize text-white">{f.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Footer;
