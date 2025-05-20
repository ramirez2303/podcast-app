import ChipButton from "../../../../../../components/ChipButton";

const PodcastsChips = () => {
    return (
        <div className="flex items-center gap-2 px-8 md:px-0 pt-[18px]">
            <ChipButton label="Trending" onClick={() => {}} selected />
            <ChipButton
                label="Favoritos"
                onClick={() => {}}
                icon="/src/assets/filled-star-icon.svg"
                count={12}
            />
        </div>
    );
};

export default PodcastsChips;
