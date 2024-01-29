import Image from "next/image";
import { Crypto } from "./CryptoSection";

interface CryptoBtnProps {
    c: Crypto;
    index: number;
}

const CryptoBtn = ({ c, index }: CryptoBtnProps) => (
    <div className="hover:bg-darkSurface-800 group flex cursor-pointer items-center justify-between rounded-xl p-3 transition-all duration-500">
        <div className="flex items-center gap-3">
            <Image src={c.icon} width={44} height={44} alt={c.name} />
            <div className="flex flex-col justify-between">
                <div className="text-lg font-semibold uppercase text-lightPrimary">{c.name}</div>
                <div className="flex items-center">
                    {c.others.map((crypto, i) => (
                        <div
                            key={i}
                            className={`flex items-center rounded-full border border-lightPrimary/10 bg-darkSurface p-1 group-hover:gap-1 ${i !== 0 && "-ml-1 group-hover:ml-1"}`}
                        >
                            <Image src="/brand/icons/cryptos/polygon-small.svg" alt="polygon icon" width={16} height={16} />
                            <div className="max-w-0 -translate-x-full transform overflow-hidden whitespace-nowrap text-xs leading-3 text-white opacity-0 transition-all duration-200 ease-in-out group-hover:max-w-xs group-hover:translate-x-0 group-hover:opacity-100">
                                {crypto}
                            </div>
                        </div>
                    ))}
                    {index === 0 && (
                        <div className="-ml-1 rounded-full border border-lightPrimary/10 bg-darkSurface p-1.5 text-[10px] font-medium leading-3 text-white group-hover:ml-1">
                            +3
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-2">
                <div className="flex max-w-0 translate-x-full transform items-center justify-center overflow-hidden whitespace-nowrap rounded-[26px] bg-[#25593766] px-2 py-0.5 text-xs leading-3 text-[#55CC7D] opacity-0 transition-all duration-200 ease-in-out group-hover:max-w-xs group-hover:translate-x-0 group-hover:opacity-100">
                    +2.5%
                </div>
                <div className="font-semibold text-lightPrimary">${c.value}</div>
            </div>
            <div className="gap-[-4px] text-sm font-medium text-lightPrimary/30">1 POL</div>
        </div>
    </div>
);

export default CryptoBtn;
