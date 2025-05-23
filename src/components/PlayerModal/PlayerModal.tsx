import { usePlayerStore } from "../../stores/usePlayerStore";
import AudioPlayer from "../AudioPlayer";
import TextMarquee from "../TextMarquee";

const PlayerModal = () => {
    const { isPlayerOpen, togglePlayer, currentEpisode } = usePlayerStore();

    return (
        <div
            className={`w-[100vw] md:max-w-[380px] md:h-[440px] fixed z-20 bottom-0 md:bottom-5 md:right-5 bg-[#0F0F2D] md:bg-[#0F0F2DCC] md:backdrop-blur-[30px] flex flex-col py-6 md:rounded-[39px] ${
                !currentEpisode?.id && "hidden"
            } ${
                isPlayerOpen
                    ? "md:opacity-100"
                    : "md:opacity-0 pointer-events-none"
            } duration-200 ease-in-out `}
        >
            <img
                src="/src/assets/close-icon.svg"
                alt="close icon"
                className="hidden md:block absolute top-7 left-7 cursor-pointer"
                onClick={togglePlayer}
            />
            <div className="w-full h-full flex md:flex-col justify-center items-center gap-4">
                <div className="flex md:flex-col gap-4 justify-center items-center text-white md:mt-10">
                    <img
                        className="w-[68px] md:w-[200px] h-[68px] md:h-[200px] rounded-lg md:rounded-[14px]"
                        src={currentEpisode?.image}
                        alt="episode image"
                    />
                    <div className="flex flex-col flex-col-reverse justify-start items-start md:items-center gap-1 max-[768px]:min-w-[50vw] max-w-[380px] px-8">
                        <div className="block md:hidden w-full mt-1">
                            <div className="w-full h-[1px] bg-white" />
                            <div className="w-full flex justify-between items-center mt-1">
                                <span className="text-[10px] font-regular">
                                    00:00
                                </span>
                                <span className="text-[10px] font-regular">
                                    45:37
                                </span>
                            </div>
                        </div>
                        <TextMarquee
                            className="text-xs font-bold md:text-2xl md:font-black max-w-[50vw] md:max-w-[100%]"
                            text={currentEpisode?.title ?? ""}
                        />
                        <TextMarquee
                            className="text-xs font-bold md:text-2xl md:font-black max-w-[50vw] md:max-w-[100%]"
                            text={currentEpisode?.podcastTitle ?? ""}
                        />
                    </div>
                </div>
                <AudioPlayer episode={currentEpisode} />
            </div>
        </div>
    );
};

export default PlayerModal;
