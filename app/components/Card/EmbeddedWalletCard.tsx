import Image from "next/image";
import CardTop from "./EmbeddedWallet/CardTop";
import CardMain from "./EmbeddedWallet/CardMain";
import CryptoSection from "./EmbeddedWallet/CryptoSection";
import Footer from "./EmbeddedWallet/Footer";
import ToCloseBtn from "./EmbeddedWallet/ToCloseBtn";

const EmbeddedWalletCard = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center p-3 pt-10 text-[13px] md:pt-0 md:text-base">
            <div className="relative flex h-full max-h-[753px] w-full max-w-[412px] flex-col justify-between rounded-[20px] border border-[#fafafa14] bg-darkSurface pb-3">
                <ToCloseBtn />
                <div className="h-1/3 w-full md:max-h-[432px]">
                    <video
                        src="/brand/video/static-bg-animation.webm"
                        className="h-full w-full rounded-t-[20px] object-cover mix-blend-lighten"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="absolute left-6 right-6 top-7 w-[calc(100%-48px)]">
                    <CardTop />
                    <CardMain />
                </div>
                <div className="px-6">
                    <div className="mt-8 font-semibold text-lightPrimary/30">Crypto</div>
                    <CryptoSection />
                    <Footer />
                </div>
                <div className="mx-auto mt-2 flex w-fit items-center justify-center gap-2 rounded-xl p-2 hover:bg-lightPrimary/10">
                    <Image src="/brand/footer-logo.svg" width={16} height={16} alt="footer icon" />
                    <div className="text-sm font-semibold text-[#808080]">Open Tria</div>
                    <Image src="/brand/arrow/arrow-up.svg" width={16} height={16} alt="footer icon" />
                </div>
            </div>
        </div>
    );
};

export default EmbeddedWalletCard;
