import EmptyState from "@/components/EmptyState";
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
            {!visibleResults?.length && !isLoading ? (
                <EmptyState
                    message="No hay resultados disponibles"
                    imageUrl="/src/assets/search-no-result.png"
                    imageAlt="No results found image"
                />
            ) : (
                <PodcastListBase
                    podcasts={visibleResults}
                    isLoading={isLoading}
                />
            )}
            <InView onChange={(inView) => inView && loadMore()} />
        </div>
    );
};

export default TrendingSection;
