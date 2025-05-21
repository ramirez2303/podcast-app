import PodcastListBase from "@/components/PodcastListBase";
import { useTrendingPodcast } from "@/hooks/useTrendingPodcast";
import { useTrendingStore } from "@/stores/useTrendingStore";

const TrendingSection = () => {
    const { tendringPodcasts } = useTrendingStore();
    const { isLoading } = useTrendingPodcast();

    return (
        <div>
            <PodcastListBase
                podcasts={tendringPodcasts}
                isLoading={isLoading}
            />
        </div>
    );
};

export default TrendingSection;
