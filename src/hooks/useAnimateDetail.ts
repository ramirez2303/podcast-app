import { useEffect, useRef, useState, useCallback, useMemo } from "react";

export const useAnimateDetail = (description: string) => {
    const [showDetail, setShowDetail] = useState(false);
    const toggleShowDetail = useCallback(
        () => setShowDetail((prev) => !prev),
        []
    );

    const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const getDescriptionHeight = useCallback(() => {
        if (descriptionRef?.current) {
            setDescriptionHeight(descriptionRef?.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        getDescriptionHeight();
    }, [showDetail, getDescriptionHeight, description]);

    const [scrollY, setScrollY] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;

        if (!scrollElement) return;

        const handleScroll = () => setScrollY(scrollElement.scrollTop);

        scrollElement.addEventListener("scroll", handleScroll);
        return () => scrollElement.removeEventListener("scroll", handleScroll);
    }, []);

    const fadeTriggerPoint =
        descriptionHeight - (showDetail ? descriptionHeight * 0.33 : 80);

    const maxScrollStart = showDetail
        ? descriptionHeight * 0.85
        : Math.max(fadeTriggerPoint, 0);

    const imageScale = useMemo(() => {
        if (scrollY < maxScrollStart) return 1;
        const scrolled = scrollY - maxScrollStart;
        return Math.max(1 - scrolled / 100, 0.55);
    }, [scrollY, maxScrollStart]);

    const descriptionOpacity = useMemo(() => {
        if (scrollY < maxScrollStart) return 1;
        const scrolled = scrollY - maxScrollStart;
        return Math.max(1 - scrolled / 50, 0);
    }, [scrollY, maxScrollStart]);

    const isDetailMinimized = descriptionOpacity === 0;

    return {
        showDetail,
        toggleShowDetail,
        scrollRef,
        imageScale,
        descriptionOpacity,
        isDetailMinimized,
        descriptionHeight,
        descriptionRef,
    };
};
