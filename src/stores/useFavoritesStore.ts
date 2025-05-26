import type { Podcast } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesStore = {
    favorites: Record<Podcast["id"], Podcast>;
    addPodcast: (podcast: Podcast) => void;
    removePodcast: (podcastId: number) => void;
    isFavorite: (podcastId: number) => boolean;
    handleFavorite: (podcast: Podcast) => void;
    getFavoritesList: () => Podcast[];
};

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: {},

            addPodcast: (podcast) =>
                set((state) => ({
                    favorites: { ...state.favorites, [podcast.id]: podcast },
                })),

            removePodcast: (podcastId) =>
                set((state) => {
                    const updated = { ...state.favorites };
                    delete updated[podcastId];
                    return { favorites: updated };
                }),

            isFavorite: (podcastId) => !!get().favorites[podcastId],

            handleFavorite: (podcast) => {
                const isFavorite = get().isFavorite(podcast.id);
                if (isFavorite) {
                    get().removePodcast(podcast.id);
                } else {
                    get().addPodcast(podcast);
                }
            },

            getFavoritesList: () => Object.values(get().favorites),
        }),
        {
            name: "favorites-storage",
        }
    )
);
