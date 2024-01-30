"use client";

import Image from "next/image";
import { useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

type Top = "default" | "hover";

const ToCloseBtn = () => {
    const [top, setTop] = useState<Top>("default");

    const srcTop = () => {
        const topMap = {
            default: "/brand/card/card-top-default.svg",
            hover: "/brand/card/card-top-hover.svg",
            tooltip: "/brand/card/card-top-tooltip.svg",
        };

        return topMap[top];
    };

    return (
        <div
            className="absolute -top-[34px] left-1/2 z-10 -translate-x-1/2 cursor-pointer"
            onMouseEnter={() => setTop("hover")}
            onMouseLeave={() => setTop("default")}
        >
            <Tooltip text="Shrink" isOnTop>
                <Image src={srcTop()} width={110} height={34} alt="top" className="" />
            </Tooltip>
        </div>
    );
};

export default ToCloseBtn;
