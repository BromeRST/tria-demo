"use client";

import Image from "next/image";
import PurpleBtn from "../../Buttons/PurpleBtn";
import TransparentBtn from "../../Buttons/TransparentBtn";
import GrayBtn from "../../Buttons/GrayBtn";
import metamaskSDK from "@web3-onboard/metamask";
import injectedModule from "@web3-onboard/injected-wallets";
import { init, useConnectWallet } from "@web3-onboard/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const injected = injectedModule();

const metamaskSDKWallet = metamaskSDK({
    options: {
        extensionOnly: false,
        dappMetadata: {
            name: "Galaxythrone",
        },
    },
});

init({
    wallets: [injected, metamaskSDKWallet],
    chains: [
        {
            id: "0x89",
            token: "MATIC",
            label: "Polygon Mainnet",
            rpcUrl: "https://polygon-rpc.com",
        },
    ],
    accountCenter: {
        desktop: {
            enabled: false,
            containerElement: "body",
        },
        mobile: {
            enabled: false,
            containerElement: "body",
        },
    },
});

const CardLogin = () => {
    const [{ wallet }, connect] = useConnectWallet();

    useEffect(() => {
        if (wallet) {
            redirect("/loading");
        }
    }, [wallet]);

    return (
        <div className="bg-darkSurface flex w-full flex-col gap-3 rounded-2xl p-4">
            <PurpleBtn href="/register">
                <div className="flex size-6 items-center justify-center rounded-full bg-lightPrimary md:size-8">
                    <Image src="/brand/icons/socials/google.svg" width={24} height={24} alt="google icon" />
                </div>
                <div className="font-semibold text-lightPrimary">Continue with Google</div>
            </PurpleBtn>
            <GrayBtn href="/register">
                <div className="flex size-6 items-center justify-center rounded-full bg-lightPrimary md:size-8">
                    <Image src="/brand/icons/socials/x.svg" className="w-5 md:w-6" width={24} height={24} alt="x icon" />
                </div>
                <div className="font-semibold text-lightPrimary">Continue with X (formerly Twitter)</div>
            </GrayBtn>
            <GrayBtn href="/register">
                <div className="flex items-center">
                    <Image src="/brand/icons/phone.svg" className="w-7 md:w-9" width={36} height={36} alt="phone icon" />
                    <Image src="/brand/icons/mail.svg" className="-ml-3 w-7 md:w-9" width={36} height={36} alt="mail icon" />
                </div>
                <div className="font-semibold text-lightPrimary">Continue with Phone or Email</div>
            </GrayBtn>
            <div className="flex items-center gap-4 py-2.5">
                <div className="h-0.5 w-full bg-lightPrimary/10"></div>
                <div className="text-xs font-semibold text-lightPrimary/30">OR</div>
                <div className="h-0.5 w-full bg-lightPrimary/10"></div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
                <TransparentBtn onClick={() => connect()}>
                    <div className="flex size-7 items-center justify-center rounded-full bg-lightPrimary">
                        <Image src="/brand/icons/metamask-fox.svg" width={24} height={24} alt="metamask icon" />
                    </div>
                    <div className="font-medium text-lightPrimary/80">Metamask</div>
                </TransparentBtn>
                <TransparentBtn>
                    <div className="size-7 rounded-full bg-[url('/brand/icons/wallet-connect.svg')] bg-cover bg-center"></div>
                    <div className="font-medium text-lightPrimary/80">WalletConnect</div>
                </TransparentBtn>
            </div>
        </div>
    );
};

export default CardLogin;
