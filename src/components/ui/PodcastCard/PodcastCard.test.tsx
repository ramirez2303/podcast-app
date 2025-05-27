import { render, screen, fireEvent } from "@testing-library/react";
import PodcastCard from "./PodcastCard";
import { vi } from "vitest";
import type { Podcast } from "@/types";
import { usePodcastDetailStore } from "@/stores/usePodcastDetailStore";
import { useFavoritesStore } from "@/stores/useFavoritesStore";

vi.mock("@/stores/usePodcastDetailStore", () => ({
    usePodcastDetailStore: vi.fn(() => ({
        handleOpenDetail: vi.fn(),
    })),
}));

vi.mock("@/stores/useFavoritesStore", () => ({
    useFavoritesStore: vi.fn(() => ({
        handleFavorite: vi.fn(),
    })),
}));

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

    it("se renderiza correctamente con los datos del podcast", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        expect(screen.getAllByText("Test Podcast"));
        expect(screen.getAllByText("This is a test description"));
        expect(screen.getAllByText("por Test Author"));
    });

    it("llama a handleOpenDetail al hacer clic en la card mobile", () => {
        const handleOpenDetail = vi.fn();
        (usePodcastDetailStore as unknown as jest.Mock).mockReturnValue({
            handleOpenDetail,
        });

        render(<PodcastCard podcastData={mockPodcastData} />);
        const mobileCard = screen.getByTestId("mobile-podcast-card");
        fireEvent.click(mobileCard);

        expect(handleOpenDetail).toHaveBeenCalledWith(mockPodcastData);
    });

    it("llama a handleFavorite al hacer clic en el botón de favorito", () => {
        const handleFavorite = vi.fn();
        (useFavoritesStore as unknown as jest.Mock).mockReturnValue({
            handleFavorite,
        });

        render(<PodcastCard podcastData={mockPodcastData} />);
        const favoriteButton = screen.getByRole("button");
        fireEvent.click(favoriteButton);

        expect(handleFavorite).toHaveBeenCalledWith(mockPodcastData);
    });

    it("muestra la imagen de ampliar detalle correctamente en la card mobile", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        const mobileImage = screen.getByRole("img", { name: "chevron icon" });
        expect(mobileImage).toHaveAttribute(
            "src",
            "/src/assets/chevron-icon.svg"
        );
    });

    it("muestra el boton de favorito correctamente en la card de desktop", () => {
        render(<PodcastCard podcastData={mockPodcastData} />);
        const desktopImage = screen.getByRole("img", {
            name: "favorite button",
        });
        expect(desktopImage).toHaveAttribute(
            "src",
            "/src/assets/star-icon.svg"
        );
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
