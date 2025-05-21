import type { PodcastList } from "@/types";
import PodcastCard from "../PodcastCard";
import CardSkeleton from "../skeletons/CardSkeleton";

interface PodcastListBaseProps {
    podcasts?: PodcastList;
    isLoading?: boolean;
    // error?: string | null;
}

const PodcastListBase = ({
    podcasts,
    isLoading,
}: // error,
PodcastListBaseProps) => {
    return (
        <div className="w-full flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-4">
            {isLoading
                ? Array(8)
                      .fill({})
                      .map((_, ix) => <CardSkeleton key={ix} />)
                : podcasts?.map((item, ix) => (
                      <PodcastCard key={item.id + ix} podcastData={item} />
                  ))}
        </div>
    );
};

export default PodcastListBase;
