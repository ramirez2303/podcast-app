type ChipButtonProps = {
    label: string;
    onClick: () => void;
    icon?: string;
    disabled?: boolean;
    selected?: boolean;
    count?: number;
};

const ChipButton = ({
    label,
    onClick,
    icon,
    disabled,
    selected,
    count,
}: ChipButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2 text-xl font-bold py-1 px-3 border-2 border-[#0F0F2D] rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                disabled
                    ? "cursor-not-allowed opacity-70"
                    : selected
                    ? "group bg-[#0F0F2D] text-white hover:bg-[#0f0f2dc7]"
                    : "group hover:bg-[#0f0f2dc7] hover:text-white"
            }`}
        >
            {icon && (
                <img
                    src={icon}
                    alt="favorites chip"
                    className={`
                        ${
                            selected
                                ? "invert-100 sepia-[.73] saturate-[.02] hue-rotate-[81deg] brightness-[1.04] contrast-[1.01]"
                                : "group-hover:invert-100 group-hover:sepia-[.73] group-hover:saturate-[.02] group-hover:hue-rotate-[81deg] group-hover:brightness-[1.04] group-hover:contrast-[1.01]"
                        } transition-all duration-100
                    `}
                />
            )}
            {label}
            {!!count && (
                <span
                    className={`text-lg bg-[#0F0F2D] rounded-full w-[30px] h-[30px] ${
                        selected
                            ? "bg-white text-[#0F0F2D]"
                            : "text-white group-hover:bg-white group-hover:text-[#0F0F2D]"
                    } transition-all duration-300 ease-in-out`}
                >
                    {count}
                </span>
            )}
        </button>
    );
};

export default ChipButton;
