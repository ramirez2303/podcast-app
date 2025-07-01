import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import PodcastCard from "./PodcastCard";
import { vi } from "vitest";
import type { Podcast } from "@/types";

// Mock de stores
vi.mock("@/stores/usePodcastDetailStore", () => ({
    usePodcastDetailStore: vi.fn(() => ({
        handleOpenDetail: vi.fn(),
    })),
}));

vi.mock("@/stores/useFavoritesStore", () => ({
    useFavoritesStore: vi.fn(() => ({
        handleFavorite: vi.fn(),
        isFavorite: vi.fn(() => true),
    })),
}));

// Mock de imágenes
vi.mock("@/assets/chevron-icon.svg", () => ({
    default: "/mocked-chevron-icon.svg",
}));
vi.mock("@/assets/star-icon.svg", () => ({ default: "/mocked-star-icon.svg" }));

const mockPodcastData: Podcast = {
    id: 1,
    url: "https://example.com/test-podcast",
    title: "Test Podcast",
    description: "This is a test description",
    author: "Test Author",
    image: "/test-image.jpg",
    artwork: "/test-artwork.jpg",
    newestItemPublishTime: 1672531200,
    itunesId: 123456,
    trendScore: 95,
    language: "en",
    categories: {
        "1": "Technology",
        "2": "Education",
    },
};

describe("PodcastCard", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("muestra la imagen de ampliar detalle correctamente en la card mobile", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        const mobileImage = screen.getByRole("img", { name: "chevron icon" });
        expect(mobileImage).toHaveAttribute("src", "/mocked-chevron-icon.svg");
    });

    it("muestra el botón de favorito correctamente en la card de desktop", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        const desktopImage = screen.getByRole("img", {
            name: "favorite button",
        });
        expect(desktopImage).toHaveAttribute("src", "/mocked-star-icon.svg");
    });

    it("renderiza correctamente el autor en la card de desktop", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        expect(screen.getByText("por Test Author")).toBeInTheDocument();
    });

    it("renderiza correctamente el número de episodios en la card mobile", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        expect(screen.getByText("844 Episodios")).toBeInTheDocument();
    });
});
