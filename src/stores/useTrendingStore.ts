import type { PodcastList } from "@/types";
import { create } from "zustand";

type TrendingStore = {
    tendringPodcasts?: PodcastList;
    setTrendingPodcasts: (podcasts: PodcastList) => void;
    addTrendingPodcasts: (podcasts: PodcastList) => void;
    visibleCount: number;
    loadMore: () => void;
};

export const useTrendingStore = create<TrendingStore>((set) => ({
    tendringPodcasts: undefined,
    setTrendingPodcasts: (podcasts) => set({ tendringPodcasts: podcasts }),
    addTrendingPodcasts: (podcasts) =>
        set((state) => ({
            tendringPodcasts: [...(state.tendringPodcasts ?? []), ...podcasts],
        })),
    visibleCount: 8,
    loadMore: () =>
        set((state) => ({
            visibleCount: state.visibleCount + 8,
        })),
}));
