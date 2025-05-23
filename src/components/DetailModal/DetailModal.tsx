import { useAnimateDetail } from "@/hooks/useAnimateDetail";
import { usePodcastEpisodes } from "@/hooks/usePodcastEpisodes";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { useCallback, useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { usePlayerStore } from "../../stores/usePlayerStore";
import { usePodcastDetailStore } from "../../stores/usePodcastDetailStore";
import PodcastCover from "../PodcastCover";
import SafeHtmlContent from "../SafeHtmlContent";
import DetailSkeleton from "../skeletons/DetailSkeleton";

const DetailModal = () => {
    const { selectedPodcastData, isDetailOpen, toggleIsDetailOpen } =
        usePodcastDetailStore();
    const { handleFavorite } = useFavoritesStore();
    const { isPlayerOpen, togglePlayer, setEpisode } = usePlayerStore();
    const { image, title, description } = selectedPodcastData || {};
    const { data, isLoading } = usePodcastEpisodes();
    const {
        showDetail,
        toggleShowDetail,
        scrollRef,
        imageScale,
        descriptionOpacity,
        isDetailMinimized,
        descriptionHeight,
        descriptionRef,
    } = useAnimateDetail(description ?? "");

    const handleKeyDown = useCallback(
        ({ key }: KeyboardEvent): void => {
            if (key === "Escape" && isDetailOpen) {
                toggleIsDetailOpen();
            }
        },
        [toggleIsDetailOpen, isDetailOpen]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleIsDetailOpen, handleKeyDown]);

    useEffect(() => {
        if (isDetailOpen && window.innerWidth <= 768) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            if (window.innerWidth <= 768) {
                document.body.style.overflow = "auto";
            }
        };
    }, [isDetailOpen]);

    const handleCloseDetail = () => {
        if (showDetail) toggleShowDetail();
        toggleIsDetailOpen();
    };

    return (
        <Fragment>
            {/* Backdrop Overlay */}
            <div
                onClick={handleCloseDetail}
                className={
                    !isDetailOpen ? "hidden" : `w-screen h-screen fixed z-10`
                }
            />
            {/* Detail Modal */}
            <div
                ref={scrollRef}
                className={`overflow-y-auto w-[100vw] h-[90vh] md:w-[481px] md:h-[100%] bg-[#0F0F2D] fixed z-10 ${
                    isDetailOpen ? "bottom-0" : "-bottom-[100vh]"
                } md:top-0 ${
                    isDetailOpen ? "md:left-0" : "md:-left-500"
                } duration-600 ease-in-out flex flex-col justify-start items-center text-white max-[768px]:rounded-t-[30px] md:rounded-r-[30px]`}
            >
                <div className="md:hidden absolute top-4 w-[55px] h-[3px] rounded-full bg-white" />
                <div className="w-full flex flex-col sticky top-0 gap-8 py-8 bg-[#0F0F2D]">
                    <div className="w-full flex justify-between items-center px-12">
                        <PodcastCover
                            src="/src/assets/star-icon.svg"
                            alt="favorite icon"
                            className="cursor-pointer"
                            onClick={() =>
                                selectedPodcastData &&
                                handleFavorite(selectedPodcastData)
                            }
                        />
                        <img
                            src="/src/assets/close-icon.svg"
                            alt="close icon"
                            className="cursor-pointer"
                            onClick={handleCloseDetail}
                        />
                    </div>
                    <div className="w-full flex flex-col justify-start items-center gap-4 px-6 md:px-12">
                        <img
                            className="transition-all duration-100 ease-in-out rounded-[20px]"
                            style={{
                                width: `${230 * imageScale}px`,
                                height: `${230 * imageScale}px`,
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
                                showDetail ? "max-h-full " : "max-h-[70px]"
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
                                src="/src/assets/chevron-icon.svg"
                                className={`w-[16px] bottom-0 ${
                                    showDetail ? "rotate-270" : "rotate-90"
                                } cursor-pointer duration-300 ease-in-out -mt-2`}
                                onClick={toggleShowDetail}
                                style={{
                                    display: isDetailMinimized
                                        ? "none"
                                        : "block",
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full px-6 md:px-12 flex flex-col gap-10 flex-1 pb-8">
                    <div className="w-full flex flex-col justify-start items-center gap-2 pb-26 md:pb-0">
                        {isLoading ? (
                            <DetailSkeleton />
                        ) : (
                            <>
                                <h5 className="text-xl font-bold self-start">
                                    {data?.count ?? 0} episodios
                                </h5>
                                <div className="w-full flex flex-col">
                                    {data?.items?.map((item, ix) => (
                                        <div
                                            key={ix}
                                            className="w-full flex px-4 py-4 justify-between items-center border-b border-[#ffffff4c]"
                                        >
                                            <div className="w-full flex gap-4 items-center">
                                                <PodcastCover
                                                    className="w-[40px] h-[40px]"
                                                    src={item.image}
                                                    alt="episode image"
                                                />
                                                <div className="flex flex-col justify-center items-start">
                                                    <span className="max-w-[12rem] md:max-w-[15rem] text-base font-bold whitespace-nowrap text-ellipsis overflow-hidden">
                                                        {item.title}
                                                    </span>
                                                    <span className="text-sm font-regular">
                                                        {item.duration} mins
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    if (!isPlayerOpen)
                                                        togglePlayer();
                                                    setEpisode({
                                                        ...item,
                                                        podcastTitle:
                                                            title ?? "",
                                                    });
                                                }}
                                                className="w-fit h-fit p-3 ml-4 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer self-end"
                                            >
                                                <img
                                                    src="/src/assets/play-icon.svg"
                                                    alt="play icon"
                                                    className="w-[14px] md:min-w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DetailModal;
