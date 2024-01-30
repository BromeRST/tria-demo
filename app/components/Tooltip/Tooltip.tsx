"use client";

import { useRef, useState } from "react";

interface TooltipProps {
    children: JSX.Element;
    text: string;
    isOnTop?: boolean;
}

const Tooltip = ({ children, text, isOnTop = false }: TooltipProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
    const hoverTimer = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        hoverTimer.current = setTimeout(() => {
            setIsTooltipVisible(true);
        }, 1000); // 1000 milliseconds = 1 second
    };

    const handleMouseLeave = () => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
        }
        setIsTooltipVisible(false);
    };

    return (
        <div
            className="relative flex h-full cursor-pointer flex-col items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isTooltipVisible && isOnTop && (
                <div className="shadow-tooltip absolute bottom-[18px] z-10 mb-2 whitespace-nowrap rounded-lg bg-[#E5E5E5] px-3 py-1 text-xs font-semibold text-offBlack">
                    {text}
                    <div className="triangle absolute -bottom-1 left-1/2 h-1.5 w-3 -translate-x-1/2 rotate-180 overflow-hidden bg-[#E5E5E5]" />
                </div>
            )}

            {children}

            {!isOnTop && isTooltipVisible && (
                <div className="shadow-tooltip absolute top-10 z-10 mb-2 whitespace-nowrap rounded-lg bg-[#E5E5E5] px-3 py-1 text-xs font-semibold text-offBlack">
                    <div className="triangle absolute -top-1 left-1/2 h-1.5 w-3 -translate-x-1/2 overflow-hidden bg-[#E5E5E5]" />
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
