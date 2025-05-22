import DOMPurify from "dompurify";

type SafeHtmlContentProps = {
    className?: string;
    content?: string;
};

const SafeHtmlContent = ({ className, content }: SafeHtmlContentProps) => {
    return (
        <div
            className={`${className} prose prose-invert`}
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content || ""),
            }}
        />
    );
};

export default SafeHtmlContent;
