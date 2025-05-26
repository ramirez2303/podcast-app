import PodcastListBase from "@/components/PodcastListBase";
import { useSearchStore } from "@/stores/useSearchStore";
import { Fragment } from "react/jsx-runtime";

const SearchSection = () => {
    const { searchResults, isLoadingSearch } = useSearchStore();
    return (
        <Fragment>
            <PodcastListBase
                podcasts={searchResults}
                isLoading={isLoadingSearch}
            />
        </Fragment>
    );
};

export default SearchSection;
