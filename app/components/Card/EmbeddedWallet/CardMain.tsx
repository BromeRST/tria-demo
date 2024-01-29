import Image from "next/image";

const CardMain = () => (
    <div className="bg-darkSurface">
        <div className="mt-2 flex h-[190px] w-full flex-col justify-between overflow-hidden rounded-xl border border-lightPurple bg-[url('/brand/bg/card-bg.png')] bg-cover p-4">
            <div>
                <div className="flex items-center gap-[7px] font-semibold">
                    <div className="text-lightPrimary/70">Assets Up</div>
                    <div className="flex items-center justify-center rounded-[26px] bg-[#25593766] px-[7px] py-[1.7px] text-[#55CC7D]">+2.5%</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="mt-1 text-4xl font-semibold text-white">$1838.83</div>
                    <div className="cursor-pointer rounded-lg p-[7px] opacity-40 hover:bg-lightPrimary/10 hover:opacity-100">
                        <Image src="/brand/icons/refresh.svg" width={18} height={18} alt="refresh icon" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3.5">
                <div className="my-button group relative w-1/2 cursor-pointer rounded-lg bg-offBlack/50 py-2">
                    <div className="flex items-center justify-center gap-2">
                        <Image src="/brand/icons/buy-crypto.svg" alt="buy icon" width={24} height={24} />
                        <div className="font-semibold text-lightPrimary">Buy</div>
                        <Image
                            src="/brand/arrow/arrow-left.svg"
                            alt="arrow down"
                            className="hidden rotate-180 group-hover:block"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <div className="my-button group relative w-1/2 cursor-pointer rounded-lg bg-offBlack/50 py-2">
                    <div className="flex items-center justify-center gap-2">
                        <Image src="/brand/icons/direct-send.svg" alt="buy icon" width={24} height={24} />
                        <div className="font-semibold text-lightPrimary">Send</div>
                        <Image
                            src="/brand/arrow/arrow-left.svg"
                            alt="arrow down"
                            className="hidden rotate-180 group-hover:block"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CardMain;
