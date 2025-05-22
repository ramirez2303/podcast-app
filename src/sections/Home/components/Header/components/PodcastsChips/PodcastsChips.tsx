import { useFavoritesStore } from "@/stores/useFavoritesStore";
import ChipButton from "../../../../../../components/ChipButton";
import { useEffect } from "react";

type PodcastsChipsProp = {
    chipSelected: "trending" | "favorites";
    handleChipSelected: (chip: "trending" | "favorites") => void;
};

const PodcastsChips = ({
    chipSelected,
    handleChipSelected,
}: PodcastsChipsProp) => {
    const { favorites, getFavoritesList } = useFavoritesStore();

    useEffect(() => {
        if (!getFavoritesList().length) {
            handleChipSelected("trending");
        }
    }, [favorites, getFavoritesList, handleChipSelected]);

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
                disabled={!getFavoritesList()?.length}
                selected={chipSelected === "favorites"}
            />
        </div>
    );
};

export default PodcastsChips;
