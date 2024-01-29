import Link from "next/link";

interface PurpleBtnProps {
    children: React.ReactNode;
    href: string;
}

const PurpleBtn = ({ children, href }: PurpleBtnProps) => (
    <Link href={href}>
        <div className="w-full cursor-pointer rounded-2xl bg-purpleBtn transition-all duration-500 hover:bg-hoverPurpleBtn">
            <div className="flex w-full items-center gap-3 rounded-2xl border-2 border-transparent px-2 py-1.5 transition-all duration-500 hover:border-lightPurple md:px-3">
                {children}
            </div>
        </div>
    </Link>
);

export default PurpleBtn;
