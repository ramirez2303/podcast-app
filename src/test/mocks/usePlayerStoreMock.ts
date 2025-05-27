import { vi } from "vitest";

vi.mock("@/stores/usePlayerStore", () => ({
    usePlayerStore: () => ({
        isPlayerOpen: true,
        togglePlayer: vi.fn(),
        currentEpisode: {
            id: "ep1",
            title: "Test Episode Title",
            podcastTitle: "Test Podcast Title",
            image: "test-image.jpg",
            enclosureUrl: "test-url.mp3",
        },
        clearEpisode: vi.fn(),
    }),
}));
