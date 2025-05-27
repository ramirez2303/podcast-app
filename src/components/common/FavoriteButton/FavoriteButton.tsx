import { useFavoritesStore } from "@/stores/useFavoritesStore";
import type { Podcast } from "@/types";
import starIcon from "@/assets/star-icon.svg";

type FavoriteButtonProps = {
    podcastData?: Podcast;
    className?: string;
};

const FavoriteButton = ({ podcastData, className }: FavoriteButtonProps) => {
    const { isFavorite, handleFavorite } = useFavoritesStore();

    return (
        <button
            className={`w-[30px] h-[30px] ${className}`}
            onClick={() => podcastData && handleFavorite(podcastData)}
            style={
                podcastData && {
                    filter: isFavorite(podcastData?.id)
                        ? "brightness(0) saturate(100%) invert(58%) sepia(56%) saturate(2006%) hue-rotate(17deg) brightness(119%) contrast(97%)"
                        : "",
                }
            }
        >
            <img src={starIcon} alt="favorite button" />
        </button>
    );
};

export default FavoriteButton;
