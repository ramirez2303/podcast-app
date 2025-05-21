import { create } from "zustand";

type Episode = {
    id: string;
    title: string;
    audioUrl: string;
    podcastTitle: string;
};

type PlayerStore = {
    currentEpisode: Episode | null;
    setEpisode: (episode: Episode) => void;
    isPlayerOpen: boolean;
    togglePlayer: () => void;
};

export const usePlayerStore = create<PlayerStore>((set) => ({
    currentEpisode: null,
    setEpisode: (episode) =>
        set({ currentEpisode: episode, isPlayerOpen: true }),
    isPlayerOpen: false,
    togglePlayer: () => set((state) => ({ isPlayerOpen: !state.isPlayerOpen })),
}));
