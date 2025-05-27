interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
}

const Skeleton = ({ width, height, borderRadius }: SkeletonProps) => {
    return (
        <div
            className={`bg-gray-200 animate-pulse`}
            style={{
                minWidth: width ?? "auto",
                minHeight: height ?? "auto",
                width: width ?? "auto",
                height: height ?? "auto",
                borderRadius: borderRadius ?? "8px",
            }}
        />
    );
};

export default Skeleton;
