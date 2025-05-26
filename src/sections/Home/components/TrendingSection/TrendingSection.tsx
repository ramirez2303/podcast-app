import PodcastListBase from "@/components/PodcastListBase";
import { useTrendingPodcast } from "@/hooks/useTrendingPodcast";
import { useTrendingStore } from "@/stores/useTrendingStore";
import { InView } from "react-intersection-observer";

const TrendingSection = () => {
    const { tendringPodcasts, visibleCount, loadMore } = useTrendingStore();
    const { isLoading } = useTrendingPodcast();
    const visibleResults = tendringPodcasts?.slice(0, visibleCount);

    return (
        <div className="flex flex-col gap-4">
            <PodcastListBase podcasts={visibleResults} isLoading={isLoading} />
            <InView onChange={(inView) => inView && loadMore()} />
        </div>
    );
};

export default TrendingSection;
