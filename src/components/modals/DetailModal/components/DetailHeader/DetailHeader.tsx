import FavoriteButton from "@/components/common/FavoriteButton";
import PodcastCover from "@/components/ui/PodcastCover";
import SafeHtmlContent from "@/components/ui/SafeHtmlContent";
import { usePodcastDetailStore } from "@/stores/usePodcastDetailStore";
import closeIcon from "@/assets/close-icon.svg";
import chevronIcon from "@/assets/chevron-icon.svg";

type DetailHeaderProps = {
    imageScale: number;
    descriptionOpacity: number;
    isDetailMinimized: boolean;
    descriptionHeight: number;
    descriptionRef: React.RefObject<HTMLDivElement | null>;
    handleCloseDetail: () => void;
    image: string;
    title: string;
    description: string;
    showDetail: boolean;
    toggleShowDetail: () => void;
};

const DetailHeader = ({
    imageScale,
    descriptionOpacity,
    isDetailMinimized,
    descriptionHeight,
    descriptionRef,
    handleCloseDetail,
    image,
    title,
    description,
    showDetail,
    toggleShowDetail,
}: DetailHeaderProps) => {
    const { selectedPodcastData } = usePodcastDetailStore();
    const isMobile = window.innerWidth <= 768;
    return (
        <div
            className={`w-full flex flex-col items-center top-0 gap-8 py-8 bg-[#0F0F2D]`}
            style={{
                position: isDetailMinimized ? "sticky" : "relative",
                zIndex: 10,
            }}
        >
            <div
                className="md:hidden absolute top-4 w-[55px] h-[3px] rounded-full bg-white"
                onClick={handleCloseDetail}
            />
            <div className="w-full flex justify-between items-center px-12">
                <FavoriteButton podcastData={selectedPodcastData} />
                <img
                    src={closeIcon}
                    alt="close icon"
                    className="cursor-pointer"
                    onClick={handleCloseDetail}
                />
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-4 px-6 md:px-12">
                <PodcastCover
                    className="transition-all duration-300 ease-in-out rounded-[20px]"
                    style={{
                        width: `${(isMobile ? 170 : 230) * imageScale}px`,
                        height: `${(isMobile ? 170 : 230) * imageScale}px`,
                    }}
                    src={image}
                    alt="podcast image"
                />
                <h4
                    className="font-black text-center"
                    style={{
                        fontSize: isDetailMinimized ? "18px" : "26px",
                    }}
                >
                    {title}
                </h4>
                <div
                    className={`${
                        showDetail ? "max-h-full" : "max-h-[70px]"
                    } overflow-hidden duration-300 ease-in-out relative flex justify-start items-start`}
                    style={{
                        opacity: descriptionOpacity,
                        display: isDetailMinimized ? "none" : "block",
                    }}
                >
                    <SafeHtmlContent
                        ref={descriptionRef}
                        className="text-base font-medium text-center"
                        content={description}
                    />
                </div>
                {descriptionHeight >= 75 && (
                    <img
                        src={chevronIcon}
                        className={`w-[16px] bottom-0 ${
                            showDetail ? "rotate-270" : "rotate-90"
                        } cursor-pointer duration-300 ease-in-out -mt-2`}
                        onClick={toggleShowDetail}
                        style={{
                            display: isDetailMinimized ? "none" : "block",
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default DetailHeader;
