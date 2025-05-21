import { create } from "zustand";

type PodcastDetailStore = {
    selectedPodcastId: number | null;
    setSelectedPodcastId: (id: number | null) => void;
};

export const usePodcastDetailStore = create<PodcastDetailStore>((set) => ({
    selectedPodcastId: null,
    setSelectedPodcastId: (id) => set({ selectedPodcastId: id }),
}));
