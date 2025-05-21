import type { Podcast } from "@/types";
import { create } from "zustand";

type PodcastDetailStore = {
    isDetailOpen: boolean;
    toggleIsDetailOpen: () => void;
    selectedPodcastId: number | null;
    setSelectedPodcastId: (id: number | null) => void;
    selectedPodcastData?: Podcast;
    setSelectedPodcastData: (podcast: Podcast) => void;
};

export const usePodcastDetailStore = create<PodcastDetailStore>((set) => ({
    isDetailOpen: false,
    toggleIsDetailOpen: () =>
        set((state) => ({ isDetailOpen: !state.isDetailOpen })),
    selectedPodcastId: null,
    setSelectedPodcastId: (id) => set({ selectedPodcastId: id }),
    selectedPodcastData: undefined,
    setSelectedPodcastData: (podcast) => set({ selectedPodcastData: podcast }),
}));
