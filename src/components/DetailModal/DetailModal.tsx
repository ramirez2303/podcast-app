import { Fragment } from "react/jsx-runtime";
import { usePodcastDetailStore } from "../../stores/usePodcastDetailStore";
import { usePlayerStore } from "../../stores/usePlayerStore";
import { useEffect, useCallback } from "react";
import { usePodcastEpisodes } from "@/hooks/usePodcastEpisodes";

const DetailModal = () => {
    const { selectedPodcastData, isDetailOpen, toggleIsDetailOpen } =
        usePodcastDetailStore();
    const { isPlayerOpen, togglePlayer } = usePlayerStore();
    const { image, title, description } = selectedPodcastData || {};
    const { data } = usePodcastEpisodes();

    const handleKeyDown = useCallback(
        ({ key }: KeyboardEvent): void => {
            if (key === "Escape") {
                toggleIsDetailOpen();
            }
        },
        [toggleIsDetailOpen]
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

    return (
        <Fragment>
            {/* Backdrop Overlay */}
            <div
                onClick={toggleIsDetailOpen}
                className={
                    !isDetailOpen ? "hidden" : `w-screen h-screen fixed z-10`
                }
            />
            {/* Detail Modal */}
            <div
                className={`w-[100vw] h-[90vh] md:w-[481px] md:h-[100%] bg-[#0F0F2DCC] backdrop-blur-[30px] md:bg-[#0F0F2D] fixed z-10 ${
                    isDetailOpen ? "bottom-0" : "-bottom-[100vh]"
                } md:top-0 ${
                    isDetailOpen ? "md:left-0" : "md:-left-500"
                } duration-600 ease-in-out flex flex-col justify-start items-center py-8 gap-6 text-white max-[768px]:rounded-t-[30px] md:rounded-r-[30px]`}
            >
                <div className="md:hidden absolute top-4 w-[55px] h-[3px] rounded-full bg-white" />
                <div className="w-full flex justify-between items-center px-12">
                    <img
                        src="/src/assets/star-icon.svg"
                        alt="favorite icon"
                        className="cursor-pointer"
                    />
                    <img
                        src="/src/assets/close-icon.svg"
                        alt="close icon"
                        className="cursor-pointer"
                        onClick={toggleIsDetailOpen}
                    />
                </div>
                <div className="w-full overflow-y-auto px-6 md:px-12 flex flex-col gap-10">
                    <div className="w-full flex flex-col justify-start items-center gap-4">
                        <img
                            className="w-[230px] h-[230px] rounded-[20px] "
                            src={image}
                            alt="podcast image"
                        />
                        <h4 className="text-[26px] font-black">{title}</h4>
                        <p className="text-base font-medium text-center">
                            {description}
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center gap-2 pb-26 md:pb-0">
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
                                        <img
                                            className="w-[40px] h-[40px] rounded-lg"
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
                                        onClick={() =>
                                            !isPlayerOpen && togglePlayer()
                                        }
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
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DetailModal;
