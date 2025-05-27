import EmptyState from "@/components/common/EmptyState";
import PodcastListBase from "@/components/common/PodcastListBase";
import { useSearchStore } from "@/stores/useSearchStore";
import { InView } from "react-intersection-observer";
import { Fragment } from "react/jsx-runtime";
import emptyStateIcon from "@/assets/search-no-result.png";

const SearchSection = () => {
    const { searchResults, isLoadingSearch, visibleCount, loadMore } =
        useSearchStore();
    const visibleResults = searchResults.slice(0, visibleCount);
    return (
        <Fragment>
            {!visibleResults.length && !isLoadingSearch ? (
                <EmptyState
                    message="No se pudieron encontrar resultados"
                    imageUrl={emptyStateIcon}
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
