import ChipButton from "@/components/ui/ChipButton";
import { useFavoritesStore } from "@/stores/useFavoritesStore";

type PodcastsChipsProp = {
    chipSelected: "trending" | "favorites";
    handleChipSelected: (chip: "trending" | "favorites") => void;
};

const PodcastsChips = ({
    chipSelected,
    handleChipSelected,
}: PodcastsChipsProp) => {
    const { getFavoritesList } = useFavoritesStore();
    return (
        <div className="flex items-center gap-2 px-8 md:px-0 pt-[18px]">
            <ChipButton
                label="Trending"
                onClick={() => handleChipSelected("trending")}
                selected={chipSelected === "trending"}
            />
            <ChipButton
                label="Favoritos"
                onClick={() => handleChipSelected("favorites")}
                icon="/src/assets/filled-star-icon.svg"
                count={getFavoritesList()?.length}
                selected={chipSelected === "favorites"}
            />
        </div>
    );
};

export default PodcastsChips;
