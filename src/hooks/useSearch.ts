import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchStore } from "@/stores/useSearchStore";
import { useDebounce } from "use-debounce";
import { getPodcastSearch } from "@/services/getPodcastSearch";

export const useSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue] = useDebounce(inputValue, 400);
    const {
        setSearchResults,
        clearSearchResults,
        setIsLoadingSearch,
        setIsSearching,
    } = useSearchStore();

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value),
        []
    );

    const handleClearInput = useCallback(() => {
        setInputValue("");
        clearSearchResults();
    }, [clearSearchResults, setInputValue]);

    const { data, isFetching } = useQuery({
        queryKey: ["search", debouncedValue],
        queryFn: ({ queryKey }) => getPodcastSearch(queryKey[1]),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        enabled: !!debouncedValue,
    });

    useEffect(() => {
        setIsSearching(!!inputValue);
    }, [inputValue, setIsSearching]);

    useEffect(() => {
        if (data) {
            setSearchResults(data);
        } else if (!isFetching && !debouncedValue) {
            clearSearchResults();
        }
    }, [
        data,
        debouncedValue,
        isFetching,
        setSearchResults,
        clearSearchResults,
    ]);

    useEffect(() => {
        setIsLoadingSearch(isFetching);
    }, [isFetching, setIsLoadingSearch]);

    return { handleInputChange, handleClearInput, inputValue };
};
