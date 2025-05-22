import type { Podcast } from "@/types";
import { create } from "zustand";

type PodcastDetailStore = {
    isDetailOpen: boolean;
    toggleIsDetailOpen: () => void;
    selectedPodcastId: number | null;
    selectedPodcastData?: Podcast;
    handleOpenDetail: (podcast: Podcast) => void;
};

export const usePodcastDetailStore = create<PodcastDetailStore>((set) => ({
    isDetailOpen: false,
    toggleIsDetailOpen: () =>
        set((state) => ({ isDetailOpen: !state.isDetailOpen })),

    selectedPodcastId: null,

    selectedPodcastData: undefined,

    handleOpenDetail: (podcast) => {
        set({
            isDetailOpen: true,
            selectedPodcastId: podcast.id,
            selectedPodcastData: podcast,
        });
    },
}));
