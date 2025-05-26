type EmptyStateProps = {
    message?: string;
    imageUrl?: string;
    imageAlt?: string;
    imageClassname?: string;
};

const EmptyState = ({
    message = "No results found",
    imageUrl,
    imageAlt = "Empty state image",
    imageClassname,
}: EmptyStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center mt-16">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className={`w-[60px] md:w-[160px] ${imageClassname}`}
                />
            )}
            <span className="text-xl font-bold">{message}</span>
        </div>
    );
};

export default EmptyState;
