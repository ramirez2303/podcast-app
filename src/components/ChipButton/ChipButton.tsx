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
    disabled = false,
    selected = false,
    count,
}: ChipButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`group flex items-center gap-2 text-xl font-bold py-1 px-3 border-2 border-[#0F0F2D] rounded-full cursor-pointer hover:text-white transition-all duration-300 ease-in-out ${
                selected
                    ? "bg-[#0F0F2D] text-white hover:bg-[#0f0f2dc7]"
                    : "hover:bg-[#0f0f2dc7] hover:text-white"
            }`}
        >
            {icon && (
                <img
                    src={icon}
                    alt="favorites chip"
                    className="group-hover:invert-100 group-hover:sepia-[.73] group-hover:saturate-[.02] group-hover:hue-rotate-[81deg] group-hover:brightness-[1.04] group-hover:contrast-[1.01] transition-all duration-100"
                />
            )}
            {label}
            {count && (
                <span className="text-lg text-white bg-[#0F0F2D] rounded-full w-[30px] h-[30px] group-hover:bg-white group-hover:text-[#0F0F2D] transition-all duration-300 ease-in-out">
                    {count}
                </span>
            )}
        </button>
    );
};

export default ChipButton;
