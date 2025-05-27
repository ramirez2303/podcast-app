import "@/test/mocks/useAudioPlayerMock.ts";
import "@/test/mocks/usePlayerStoreMock.ts";
import togglePlayMock from "@/test/mocks/useAudioPlayerMock";

import { render, screen, fireEvent } from "@testing-library/react";
import PlayerModal from "@/components/modals/PlayerModal";

describe("PlayerModal", () => {
    it("muestra la información del episodio cuando está abierto", () => {
        render(<PlayerModal />);

        expect(screen.getByText("Test Episode Title")).toBeInTheDocument();
        expect(screen.getByText("Test Podcast Title")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders time correctly", () => {
        render(<PlayerModal />);

        expect(screen.getByText("0s")).toBeInTheDocument();
        expect(screen.getByText("120s")).toBeInTheDocument();
    });

    it("calls togglePlay on button click", () => {
        render(<PlayerModal />);
        fireEvent.click(screen.getByRole("button"));

        expect(togglePlayMock).toHaveBeenCalled();
    });
});
