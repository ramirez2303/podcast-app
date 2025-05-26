import type { PodcastList } from "@/types";
import PodcastCard from "../PodcastCard";
import CardSkeleton from "../skeletons/CardSkeleton";

type PodcastListBaseProps = {
    podcasts?: PodcastList;
    isLoading?: boolean;
};

const PodcastListBase = ({ podcasts, isLoading }: PodcastListBaseProps) => {
    return (
        <div className="w-full flex flex-col md:grid max-[980px]:grid-cols-2 max-[1260px]:grid-cols-3 min-[1260px]:grid-cols-4 gap-6 md:gap-4">
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
