import { on } from "events";

interface TransparentBtnProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const TransparentBtn = ({ children, onClick }: TransparentBtnProps) => (
    <div
        onClick={onClick}
        className="hover:shadow-insetBtn flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-lightPrimary/15 px-3 py-2"
    >
        {children}
    </div>
);

export default TransparentBtn;
