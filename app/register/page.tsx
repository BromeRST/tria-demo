"use client";

import Image from "next/image";
import PurpleBtn from "../components/Buttons/PurpleBtn";
import Card from "../components/Card/Card";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import emojiAnimation from "../../public/lottie/emoji-animation.json";
import Lottie from "lottie-react";

export default function Register() {
    const [name, setName] = useState("");
    const debouncedName = useDebounce(name, 300);

    return (
        <Card gotBack>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-darkSurface p-4">
                <div className="text-lg text-lightPrimary/70 md:text-[22px]">Create your Tria name</div>
                <div className="mt-5 flex items-center gap-2">
                    <div className="w-3/4 rounded-2xl bg-purpleBorder p-[1px]">
                        <div className="rounded-2xl bg-offBlack">
                            <div className="flex items-center justify-between rounded-2xl bg-lightPrimary/15 px-4 py-3">
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="outinline-none w-full bg-transparent font-semibold text-lightPrimary/80 caret-[#7F43FF] outline-none"
                                    placeholder="Your name"
                                />
                                <div className="text-lightPrimary/30">@tria</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <PurpleBtn href="/">
                            <div className="w-full py-1.5 text-center text-lightPrimary">Next</div>
                        </PurpleBtn>
                    </div>
                </div>
                {debouncedName.length > 0 && (
                    <>
                        <div className="h-5">
                            <div className="flex items-center gap-1">
                                <Image src="/brand/icons/error.svg" width={24} height={24} alt="error icon" />
                                <div className="text-sm font-semibold text-[#DA4343]">Username not available</div>
                            </div>
                        </div>

                        <div className="mt-1 text-xs text-white/50">Recommended:</div>
                        <div className="grid grid-cols-3 gap-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex cursor-pointer items-center justify-center truncate truncate rounded-full border border-lightPrimary/10 bg-[#808080]/5 px-4 py-3 text-sm text-lightPrimary/70 hover:shadow-insetBtn"
                                >{`${debouncedName}123`}</div>
                            ))}
                        </div>
                    </>
                )}
                <div className="relative mt-4 flex w-full items-center gap-2.5 overflow-hidden rounded-xl border border-lightPrimary/10 p-4">
                    <Image
                        src="/brand/band-animation.svg"
                        width={100}
                        height={40}
                        alt="animation"
                        className="animate-slide absolute z-10 h-full w-full"
                        style={{ animationDuration: "3s", animationIterationCount: "infinite", animationTimingFunction: "linear" }}
                    />
                    <div>
                        <Lottie animationData={emojiAnimation} className="size-8" />
                    </div>
                    <div className="text-[9px] text-lightPrimary/30 md:text-xs">
                        Your <span className="font-bold text-lightPrimary/70">@tria</span> is like Gmail, for Web3. Pay, receive and log-in to apps on
                        any device, and blockchain.
                    </div>
                </div>
            </div>
        </Card>
    );
}
