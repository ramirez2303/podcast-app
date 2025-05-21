import PodcastCard from "../PodcastCard";

const PodcastListBase = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-4">
            {Array(8)
                .fill({})
                .map((_) => (
                    <PodcastCard />
                ))}
        </div>
    );
};

export default PodcastListBase;
