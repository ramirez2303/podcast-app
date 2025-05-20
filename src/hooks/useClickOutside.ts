import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
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
    }, []);

    return {
        isOpen,
        setIsOpen,
        componentRef,
    };
};
