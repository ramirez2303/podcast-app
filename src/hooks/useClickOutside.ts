import { useEffect, useRef, useState } from "react";

export const useClickOutside = (disableOutsideClick?: boolean) => {
    const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !disableOutsideClick &&
                componentRef.current &&
                !componentRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [disableOutsideClick]);

    return {
        isOpen,
        setIsOpen,
        componentRef,
    };
};
