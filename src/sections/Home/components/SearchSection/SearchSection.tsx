import EmptyState from "@/components/EmptyState";
import PodcastListBase from "@/components/PodcastListBase";
import { useSearchStore } from "@/stores/useSearchStore";
import { InView } from "react-intersection-observer";
import { Fragment } from "react/jsx-runtime";

const SearchSection = () => {
    const { searchResults, isLoadingSearch, visibleCount, loadMore } =
        useSearchStore();
    const visibleResults = searchResults.slice(0, visibleCount);
    return (
        <Fragment>
            {!visibleResults.length && !isLoadingSearch ? (
                <EmptyState
                    message="No se pudieron encontrar resultados"
                    imageUrl="/src/assets/search-no-result.png"
                    imageAlt="No results found image"
                />
            ) : (
                <PodcastListBase
                    podcasts={visibleResults}
                    isLoading={isLoadingSearch}
                />
            )}
            <InView onChange={(inView) => inView && loadMore()} />
        </Fragment>
    );
};

export default SearchSection;
