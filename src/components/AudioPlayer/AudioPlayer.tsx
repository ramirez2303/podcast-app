import type { Episode } from "@/types";
import { useRef, useState } from "react";
import PodcastCover from "../PodcastCover";

const AudioPlayer = ({ episode }: { episode?: Episode }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    };

    const ButtonIcon = isPlaying
        ? "/src/assets/stop-icon.svg"
        : "/src/assets/play-icon.svg";

    return (
        <div>
            <audio ref={audioRef} src={episode?.enclosureUrl} />
            <button
                onClick={togglePlay}
                className="w-fit h-fit p-3 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer"
            >
                <PodcastCover
                    src={ButtonIcon}
                    alt="play icon"
                    className="w-[14px] md:w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
                />
            </button>
        </div>
    );
};

export default AudioPlayer;
