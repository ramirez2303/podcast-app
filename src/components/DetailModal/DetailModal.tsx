import { Fragment } from "react/jsx-runtime";
import { usePodcastDetailStore } from "../../stores/usePodcastDetailStore";
import { usePlayerStore } from "../../stores/usePlayerStore";
import { useEffect, useCallback } from "react";

const DetailModal = () => {
    const { selectedPodcastId, setSelectedPodcastId } = usePodcastDetailStore();
    const { isPlayerOpen, togglePlayer } = usePlayerStore();

    const handleKeyDown = useCallback(
        ({ key }: KeyboardEvent): void => {
            if (key === "Escape") {
                setSelectedPodcastId(null);
            }
        },
        [setSelectedPodcastId]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setSelectedPodcastId, handleKeyDown]);

    useEffect(() => {
        if (selectedPodcastId) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedPodcastId]);

    return (
        <Fragment>
            {/* Backdrop Overlay */}
            <div
                onClick={() => setSelectedPodcastId(null)}
                className={
                    !selectedPodcastId
                        ? "hidden"
                        : `w-screen h-screen fixed z-10`
                }
            />
            {/* Detail Modal */}
            <div
                className={`w-[100vw] h-[90vh] md:w-[481px] md:h-[100%] bg-[#0F0F2DCC] backdrop-blur-[30px] md:bg-[#0F0F2D] fixed z-10 ${
                    selectedPodcastId ? "bottom-0" : "-bottom-[100vh]"
                } md:top-0 ${
                    selectedPodcastId ? "md:left-0" : "md:-left-500"
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
                        onClick={() => setSelectedPodcastId(null)}
                    />
                </div>
                <div className="w-full overflow-y-auto px-12 flex flex-col gap-10">
                    <div className="w-full flex flex-col justify-start items-center gap-4">
                        <div className="w-[230px] h-[230px] rounded-[20px] bg-red-300" />
                        <h4 className="text-[26px] font-black">
                            Penang Hokkien
                        </h4>
                        <p className="text-base font-medium text-center">
                            The very first podcast entirely in Penang style
                            Hokkien. A fun show for Penangites and all who
                            understand the Chinese Hokkien language or 閩南語
                            (Min Nan). Funny and casual chats with no topic
                            restrictions. We talk about things that you will
                            only share with your closest friends.
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center gap-2 pb-26 md:pb-0">
                        <h5 className="text-xl font-bold self-start">
                            47 episodios
                        </h5>
                        <div className="w-full flex flex-col">
                            {Array(8)
                                .fill({})
                                .map((_, ix) => (
                                    <div
                                        key={ix}
                                        className="w-full flex px-4 py-4 justify-between items-center border-b border-[#ffffff4c]"
                                    >
                                        <div className="w-full flex gap-4 items-center">
                                            <div className="w-[40px] h-[40px] rounded-lg bg-red-300" />
                                            <div className="flex flex-col justify-center items-start">
                                                <span className="text-base font-bold">
                                                    884 - Find Pennang
                                                </span>
                                                <span className="text-sm font-regular">
                                                    45 mins
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onClick={() =>
                                                !isPlayerOpen && togglePlayer()
                                            }
                                            className="w-fit h-fit p-3 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer"
                                        >
                                            <img
                                                src="/src/assets/play-icon.svg"
                                                alt="play icon"
                                                className="w-[14px] md:w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
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
