import EmptyState from "@/components/common/EmptyState";
import DetailSkeleton from "@/components/common/skeletons/DetailSkeleton";
import PodcastCover from "@/components/ui/PodcastCover";
import { usePodcastEpisodes } from "@/hooks/usePodcastEpisodes";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { InView } from "react-intersection-observer";
import emptyStateIcon from "@/assets/search-no-result.png";
import playIcon from "@/assets/play-icon.svg";

type EpisodesProps = {
    title?: string;
};

const Episodes = ({ title }: EpisodesProps) => {
    const { data, isLoading } = usePodcastEpisodes();
    const { isPlayerOpen, togglePlayer, setEpisode, visibleCount, loadMore } =
        usePlayerStore();
    const visibleEpisodes = data?.items?.slice(0, visibleCount) || [];

    return (
        <div
            className={`w-full flex flex-col justify-start items-center gap-2 ${
                isPlayerOpen && "pb-26"
            } md:pb-0`}
        >
            {isLoading ? (
                <DetailSkeleton />
            ) : (
                <>
                    <h5 className="text-xl font-bold self-start">
                        {data?.count ?? 0} episodios
                    </h5>
                    <div className="w-full flex flex-col">
                        {visibleEpisodes.length ? (
                            visibleEpisodes?.map((item, ix) => (
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
                                            if (!isPlayerOpen) togglePlayer();
                                            setEpisode({
                                                ...item,
                                                podcastTitle: title ?? "",
                                            });
                                        }}
                                        className="w-fit h-fit p-3 ml-4 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer self-end"
                                    >
                                        <img
                                            src={playIcon}
                                            alt="play icon"
                                            className="w-[14px] md:min-w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <EmptyState
                                message="No hay episodios disponible"
                                imageUrl={emptyStateIcon}
                                imageAlt="No results found image"
                                imageClassname="invert-[.99] sepia-[.1] saturate-[6.71] hue-rotate-[178deg] brightness-[1.13] contrast-100"
                            />
                        )}
                    </div>
                </>
            )}
            <InView onChange={(inView) => inView && loadMore()} />
        </div>
    );
};

export default Episodes;
