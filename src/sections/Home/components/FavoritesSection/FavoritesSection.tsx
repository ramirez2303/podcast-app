import PodcastListBase from "@/components/PodcastListBase";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { Fragment } from "react/jsx-runtime";

const FavoritesSection = () => {
    const { getFavoritesList } = useFavoritesStore();
    return (
        <Fragment>
            <PodcastListBase podcasts={getFavoritesList()} isLoading={false} />
        </Fragment>
    );
};

export default FavoritesSection;
