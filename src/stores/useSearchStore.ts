import type { PodcastList } from "@/types";
import { create } from "zustand";

type SearchStore = {
    searchResults: PodcastList;
    setSearchResults: (data: PodcastList) => void;
    clearSearchResults: () => void;
    isLoadingSearch: boolean;
    setIsLoadingSearch: (isLoading: boolean) => void;
    isSearching: boolean;
    setIsSearching: (isSearching: boolean) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
    searchResults: [],
    setSearchResults: (data) => set({ searchResults: data }),
    clearSearchResults: () => set({ searchResults: [] }),
    isLoadingSearch: false,
    setIsLoadingSearch: (isLoading) => set({ isLoadingSearch: isLoading }),
    isSearching: false,
    setIsSearching: (isSearching) => set({ isSearching: isSearching }),
}));
