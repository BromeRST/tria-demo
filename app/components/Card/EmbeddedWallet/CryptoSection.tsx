"use client";

import { useState } from "react";
import CryptoBtn from "./CryptoBtn";
import Image from "next/image";

export type Crypto = {
    icon: string;
    name: string;
    value: string;
    others: string[];
    sub: number;
};

const CryptoSection = () => {
    const [inEvidence, setInEvidence] = useState<number[]>([]);
    const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);

    const cryptos: Crypto[] = [
        { icon: "/brand/icons/cryptos/ethereum.svg", name: "usdc", value: "10.094", others: ["pol", "cos"], sub: 5 },
        { icon: "/brand/icons/cryptos/2.svg", name: "usdc", value: "10.094", others: ["pol", "cos"], sub: 2 },
        { icon: "/brand/icons/cryptos/polygon.svg", name: "usdc", value: "10.094", others: ["pol"], sub: 0 },
        { icon: "/brand/icons/cryptos/cosmos.svg", name: "usdc", value: "10.094", others: ["pol"], sub: 0 },
        { icon: "/brand/icons/cryptos/solana.png", name: "usdc", value: "10.094", others: ["pol"], sub: 5 },
    ];

    const handleClose = (i: number) => {
        setTransitioningIndex(i); // Start the transition
        setInEvidence(inEvidence.filter((item) => item !== i));

        // Reset the transitioning state after a delay
        setTimeout(() => setTransitioningIndex(null), 700); // adjust delay as needed
    };

    return (
        <div className="mt-1 flex max-h-[330px] flex-col gap-1 overflow-y-auto">
            {cryptos.map((c, i) => {
                const isInEvidence = inEvidence?.includes(i) && c.sub ? true : false;
                const applyBumpAnimation = transitioningIndex !== null && i > transitioningIndex;

                return (
                    <div
                        key={i}
                        onClick={() => setInEvidence([...inEvidence, i])}
                        className={`${isInEvidence && "rounded-xl border border-lightPrimary/10"} ${applyBumpAnimation ? "animate-bump z-30" : ""}`}
                    >
                        <CryptoBtn c={c} index={i} isInEvidence={isInEvidence} onClose={() => handleClose(i)} />

                        <div
                            className={`w-full overflow-x-hidden transition-all duration-200 ease-in-out ${isInEvidence ? "max-h-[2000px] px-0 opacity-100" : "max-h-0 scale-y-0 opacity-0"} origin-top`}
                        >
                            {Array.from({ length: c.sub }).map((_, i) => (
                                <div>
                                    <div className="bg-darkSurface-800">
                                        <div className="mx-auto h-[1px] w-11/12 bg-lightPrimary/10" />
                                    </div>
                                    <div
                                        key={i}
                                        className={`flex cursor-pointer items-center justify-between bg-darkSurface-800 p-3 ${i === c.sub - 1 && "rounded-b-xl"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="font-medium text-[#41413E]">{i + 1}</div>
                                            <Image src={c.icon} width={44} height={44} alt={c.name} />
                                            <div className="flex flex-col justify-between">
                                                <div className="text-lg font-semibold uppercase text-lightPrimary">{c.name}</div>

                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1 rounded-full border border-lightPrimary/10 bg-darkSurface p-1"
                                                >
                                                    <Image src="/brand/icons/cryptos/polygon-small.svg" alt="polygon icon" width={16} height={16} />
                                                    <div className="text-xs uppercase leading-3 text-white">pol</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="font-semibold text-lightPrimary">${c.value}</div>
                                            </div>
                                            <div className="gap-[-4px] text-sm font-medium text-lightPrimary/30">1 POL</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CryptoSection;
