import type { Episode } from "@/types";
import { create } from "zustand";

type PlayerStore = {
    currentEpisode?: Episode;
    setEpisode: (episode: Episode) => void;
    clearEpisode: () => void;
    isPlayerOpen: boolean;
    togglePlayer: () => void;
    visibleCount: number;
    loadMore: () => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
    currentEpisode: undefined,
    setEpisode: (episode) => set({ currentEpisode: episode }),
    clearEpisode: () => set({ currentEpisode: undefined }),
    isPlayerOpen: false,
    togglePlayer: () => set((state) => ({ isPlayerOpen: !state.isPlayerOpen })),
    visibleCount: 10,
    loadMore: () =>
        set((state) => ({
            visibleCount: state.visibleCount + 8,
        })),
}));
