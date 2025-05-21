import PodcastListBase from "@/components/PodcastListBase";
import { useTrendingPodcast } from "@/hooks/useTrendingPodcast";
import { useTrendingStore } from "@/stores/useTrendingStore";
import { Fragment } from "react/jsx-runtime";

const TrendingSection = () => {
    const { tendringPodcasts } = useTrendingStore();
    const { isLoading } = useTrendingPodcast();

    return (
        <Fragment>
            <PodcastListBase
                podcasts={tendringPodcasts}
                isLoading={isLoading}
            />
        </Fragment>
    );
};

export default TrendingSection;
