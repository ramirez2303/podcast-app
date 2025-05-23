import { useEffect, useRef, useState } from "react";

const TextMarquee = ({
    className,
    text,
}: {
    className: string;
    text: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const textWidth = textRef.current?.scrollWidth || 0;

        setShouldAnimate(textWidth > containerWidth);
    }, [text]);
    return (
        <div
            ref={containerRef}
            className={`relative flex ${
                shouldAnimate ? "justify-start" : "md:justify-center"
            } items-center overflow-hidden w-full md:h-10`}
        >
            <div
                ref={textRef}
                className={`inline-block whitespace-nowrap ${
                    shouldAnimate ? "animate-marquee" : ""
                }`}
            >
                <span className={className}>{text}</span>
            </div>
        </div>
    );
};

export default TextMarquee;
