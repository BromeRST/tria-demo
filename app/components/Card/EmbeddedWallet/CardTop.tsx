import Image from "next/image";
import Tooltip from "../../Tooltip/Tooltip";

const CardTop = () => (
    <>
        <div className="flex items-center justify-between">
            <div className="flex cursor-pointer items-center gap-2 rounded-xl p-1.5 hover:bg-lightPrimary/10">
                <Image src="/brand/avatar.png" alt="avatar" width={28} height={28} />
                <div className="font-semibold text-lightPrimary/80">thekaypo@tria</div>
                <Image src="/brand/arrow/arrow-left.svg" alt="arrow down" className="-rotate-90" width={16} height={16} />
            </div>
            <div className="flex items-center gap-1">
                <Tooltip text="Copy">
                    <div className="cursor-pointer rounded-lg hover:bg-lightPrimary/10">
                        <Image src="/brand/icons/copy.svg" className="opacity-40" width={32} height={32} alt="copy icon" />
                    </div>
                </Tooltip>
                <div className="backgrop-blur-[1.2px] flex size-[30px] cursor-pointer items-center justify-center rounded-lg bg-[#8345E6]">
                    <Image src="/brand/icons/polygon.svg" width={25} height={25} alt="polygon logo" />
                </div>
            </div>
        </div>
    </>
);

export default CardTop;
