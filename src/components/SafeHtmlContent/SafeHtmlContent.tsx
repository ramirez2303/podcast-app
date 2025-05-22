import DOMPurify from "dompurify";

type SafeHtmlContentProps = {
    ref?: React.RefObject<HTMLDivElement | null>;
    className?: string;
    content?: string;
};

const SafeHtmlContent = ({ ref, className, content }: SafeHtmlContentProps) => {
    return (
        <div
            ref={ref}
            className={`${className} prose prose-invert`}
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content || ""),
            }}
        />
    );
};

export default SafeHtmlContent;
