import Link from "next/link";

interface GrayBtnProps {
    children: React.ReactNode;
    href: string;
}

const GrayBtn = ({ children, href }: GrayBtnProps) => (
    <Link href={href}>
        <div className="hover:shadow-insetBtn w-full cursor-pointer rounded-2xl bg-lightPrimary/10">
            <div className="flex w-full items-center gap-3 rounded-2xl border-2 border-transparent px-2 py-1.5 md:px-3">{children}</div>
        </div>
    </Link>
);

export default GrayBtn;
