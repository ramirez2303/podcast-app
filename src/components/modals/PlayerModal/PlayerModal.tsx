import PodcastCover from "@/components/ui/PodcastCover";
import TextMarquee from "@/components/ui/TextMarquee";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { usePlayerStore } from "@/stores/usePlayerStore";
import playIcon from "@/assets/play-icon.svg";
import pauseIcon from "@/assets/stop-icon.svg";
import closeIcon from "@/assets/close-icon.svg";

const PlayerModal = () => {
    const { isPlayerOpen, togglePlayer, currentEpisode, clearEpisode } =
        usePlayerStore();

    const handleClosePlayer = () => {
        togglePlayer();
        clearEpisode();
    };

    const {
        audioRef,
        isPlaying,
        togglePlay,
        currentTime,
        duration,
        handleSeek,
        formatTime,
    } = useAudioPlayer();

    const ButtonIcon = isPlaying ? pauseIcon : playIcon;

    return (
        <div
            className={`w-[100vw] md:max-w-[380px] md:h-[440px] fixed z-25 bottom-0 md:bottom-5 md:right-5 bg-[#0F0F2D] md:bg-[#0F0F2DCC] md:backdrop-blur-[30px] flex flex-col py-6 md:rounded-[39px] ${
                !currentEpisode?.id && "hidden"
            } ${
                isPlayerOpen
                    ? "md:opacity-100"
                    : "md:opacity-0 pointer-events-none"
            } duration-200 ease-in-out `}
        >
            <img
                src={closeIcon}
                alt="close icon"
                className="hidden md:block absolute top-7 left-7 cursor-pointer"
                onClick={handleClosePlayer}
            />
            <div className="w-full h-full flex md:flex-col justify-center items-center gap-6">
                <div className="flex md:flex-col gap-6 md:gap-2 justify-center items-center text-white md:mt-8">
                    <PodcastCover
                        className="w-[68px] md:w-[200px] h-[68px] md:h-[200px]"
                        src={currentEpisode?.image}
                        alt="episode image"
                    />
                    <div className="flex flex-col flex-col-reverse justify-start items-start md:items-center gap-0 max-[768px]:min-w-[50vw] max-[768px]:max-w-[50vw] max-w-[380px] md:px-8">
                        <div className="w-full">
                            <input
                                type="range"
                                min={0}
                                max={duration || 0}
                                value={currentTime}
                                onChange={handleSeek}
                                className="w-full appearance-none h-1 bg-white rounded-md"
                            />
                            <div className="flex justify-between w-full text-white text-[10px]">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
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
                <div className="flex flex-col items-center w-fit">
                    <audio ref={audioRef} src={currentEpisode?.enclosureUrl} />
                    <button
                        onClick={togglePlay}
                        className="w-fit h-fit p-3 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer md:-mt-6"
                    >
                        <img
                            src={ButtonIcon}
                            alt="play icon"
                            className="w-[14px] md:w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerModal;
