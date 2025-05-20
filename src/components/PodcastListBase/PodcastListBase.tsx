import PodcastCard from "../PodcastCard";

const PodcastListBase = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {Array(8)
                .fill({})
                .map((_) => (
                    <PodcastCard />
                ))}
        </div>
    );
};

export default PodcastListBase;
