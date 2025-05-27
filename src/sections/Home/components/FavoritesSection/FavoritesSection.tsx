import EmptyState from "@/components/common/EmptyState";
import PodcastListBase from "@/components/common/PodcastListBase";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { Fragment } from "react/jsx-runtime";

const FavoritesSection = () => {
    const { getFavoritesList } = useFavoritesStore();
    return (
        <Fragment>
            {getFavoritesList().length ? (
                <PodcastListBase
                    podcasts={getFavoritesList()}
                    isLoading={false}
                />
            ) : (
                <EmptyState
                    message="No hay favoritos disponibles"
                    imageUrl="/src/assets/search-no-result.png"
                    imageAlt="No results found image"
                />
            )}
        </Fragment>
    );
};

export default FavoritesSection;
