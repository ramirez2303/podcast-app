import { useState, useEffect } from "react";
import placeholder from "/src/assets/image-placeholder.svg";

type PodcastCoverProps = {
    src?: string;
    alt: string;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
};

const PodcastCover = ({
    src,
    alt,
    className,
    onClick,
    style,
}: PodcastCoverProps) => {
    const [imgSrc, setImgSrc] = useState(
        src && src.trim() !== "" ? src : placeholder
    );
    useEffect(() => {
        setImgSrc(src && src.trim() !== "" ? src : placeholder);
    }, [src]);
    return (
        <img
            className={`${className} rounded-lg md:rounded-[14px]`}
            style={style}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(placeholder)}
            onClick={onClick}
        />
    );
};

export default PodcastCover;
