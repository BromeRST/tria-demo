"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import gridAnimation from "../../../public/lottie/grid-animation.json";

interface CardProps {
    children: React.ReactNode;
    gotBack?: boolean;
    isLoading?: boolean;
}

const Card = ({ children, gotBack = false, isLoading = false }: CardProps) => {
    const renderLogo = () => {
        if (isLoading) {
            return <video src="/brand/video/loading-logo.webm" className="z-10 -mb-10 w-48 object-cover mix-blend-screen" autoPlay loop muted />;
        }

        return <Image src="/brand/logo.svg" width={93} height={94.77} alt="tria logo" />;
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center p-3 text-[13px] md:text-base">
            <div className="relative flex h-full max-h-[680px] w-full max-w-[448px] flex-col justify-between rounded-[20px] border-2 border-[#8080800d] p-4 pb-3 shadow-card md:max-h-[840px]">
                {gotBack && (
                    <Link href="/" className="absolute left-2 top-4 z-50 p-2">
                        <Image src="/brand/arrow/arrow-left.svg" height={22} width={22} alt="go back icon" />
                    </Link>
                )}

                <div className="h-1/2 max-h-[270px] w-full md:max-h-[432px] 2xl:h-3/5">
                    {!isLoading && (
                        <video src="/brand/video/static-bg-animation.webm" className="h-full w-full object-cover opacity-50" autoPlay loop muted />
                    )}
                    <div className="absolute left-0 top-0 flex h-1/2  max-h-[280px] w-full flex-col items-center justify-center bg-cardTopSection md:max-h-[440px] 2xl:h-3/5">
                        {renderLogo()}
                        <div className="mt-7 w-1/3 text-center text-lg leading-[27.5px] text-white/70 md:text-[22px]">
                            Login to
                            <br />
                            <span className="font-bold">tria</span> Demo
                        </div>
                    </div>
                </div>

                {isLoading && <Lottie animationData={gridAnimation} className="absolute left-0 top-0 h-full w-full opacity-60" />}

                {children}
                <div className="z-10 flex w-full items-center justify-center gap-2.5 p-2">
                    <Image src="/brand/footer-logo.svg" width={20} height={20} alt="footer icon" />
                    <div className="text-sm font-semibold text-[#808080]">Powered by Tria</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
