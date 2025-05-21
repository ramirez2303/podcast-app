import type { Podcast } from "@/types";
import { create } from "zustand";

type PodcastDetailStore = {
    selectedPodcastId: number | null;
    setSelectedPodcastId: (id: number | null) => void;
    selectedPodcastData?: Podcast;
    setSelectedPodcastData: (podcast: Podcast) => void;
};

export const usePodcastDetailStore = create<PodcastDetailStore>((set) => ({
    selectedPodcastId: null,
    setSelectedPodcastId: (id) => set({ selectedPodcastId: id }),
    selectedPodcastData: undefined,
    setSelectedPodcastData: (podcast) => set({ selectedPodcastData: podcast }),
}));
