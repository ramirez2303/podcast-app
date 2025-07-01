import "@/test/mocks/useAudioPlayerMock.ts";
import "@/test/mocks/usePlayerStoreMock.ts";
import togglePlayMock from "@/test/mocks/useAudioPlayerMock";

import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import PlayerModal from "@/components/modals/PlayerModal";

describe("PlayerModal", () => {
    it("muestra la información del episodio cuando está abierto", () => {
        render(<PlayerModal />);

        expect(screen.getByText("Test Episode Title")).toBeInTheDocument();
        expect(screen.getByText("Test Podcast Title")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renderizar el tiempo correctamente", () => {
        render(<PlayerModal />);

        expect(screen.getByText("0s")).toBeInTheDocument();
        expect(screen.getByText("120s")).toBeInTheDocument();
    });

    it("ejecutar togglePlay al clicker button", () => {
        render(<PlayerModal />);
        fireEvent.click(screen.getByRole("button"));

        expect(togglePlayMock).toHaveBeenCalled();
    });
});
