import Image from "next/image";
import CryptoBtn from "./CryptoBtn";

export type Crypto = {
    icon: string;
    name: string;
    value: string;
    others: string[];
};

const CryptoSection = () => {
    const cryptos: Crypto[] = [
        { icon: "/brand/icons/cryptos/ethereum.svg", name: "usdc", value: "10.094", others: ["pol", "cos"] },
        { icon: "/brand/icons/cryptos/2.svg", name: "usdc", value: "10.094", others: ["pol", "cos"] },
        { icon: "/brand/icons/cryptos/polygon.svg", name: "usdc", value: "10.094", others: ["pol"] },
        { icon: "/brand/icons/cryptos/cosmos.svg", name: "usdc", value: "10.094", others: ["pol"] },
    ];

    return (
        <div className="mt-1 flex flex-col gap-1">
            {cryptos.map((c, i) => (
                <CryptoBtn key={i} c={c} index={i} />
            ))}
        </div>
    );
};

export default CryptoSection;
