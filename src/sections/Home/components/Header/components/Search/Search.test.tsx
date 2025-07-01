import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { vi } from "vitest";
import Search from "./Search";

// Mock de los hooks
import { useClickOutside } from "@/hooks/useClickOutside";
import { useSearch } from "@/hooks/useSearch";
import { useSearchStore } from "@/stores/useSearchStore";

vi.mock("@/hooks/useClickOutside", () => ({
    useClickOutside: vi.fn(() => ({
        isOpen: false,
        setIsOpen: vi.fn(),
        componentRef: { current: null },
    })),
}));

vi.mock("@/hooks/useSearch", () => ({
    useSearch: vi.fn(() => ({
        inputValue: "",
        handleInputChange: vi.fn(),
        handleClearInput: vi.fn(),
    })),
}));

vi.mock("@/stores/useSearchStore", () => ({
    useSearchStore: vi.fn(() => ({
        isSearching: false,
    })),
}));

// Mock de las imágenes
vi.mock("@/assets/close-icon.svg", () => ({
    default: "/mocked-close-icon.svg",
}));
vi.mock("@/assets/search-icon.svg", () => ({
    default: "/mocked-search-icon.svg",
}));

describe("Search", () => {
    it("muestra el ícono de búsqueda por defecto", () => {
        render(<Search />);

        const searchIcon = screen.getByAltText("search");
        expect(searchIcon).toHaveAttribute("src", "/mocked-search-icon.svg");
    });

    it("muestra el ícono de cerrar cuando está buscando", () => {
        vi.mocked(useSearchStore).mockReturnValue({
            isSearching: true,
        });

        render(<Search />);

        const closeIcon = screen.getByAltText("search");
        expect(closeIcon).toHaveAttribute("src", "/mocked-close-icon.svg");
    });

    it("llama a handleClearInput al hacer clic en el ícono de cerrar", () => {
        const handleClearInputMock = vi.fn();
        vi.mocked(useSearch).mockReturnValue({
            inputValue: "",
            handleInputChange: vi.fn(),
            handleClearInput: handleClearInputMock,
        });

        vi.mocked(useSearchStore).mockReturnValue({
            isSearching: true,
        });

        render(<Search />);

        const closeIcon = screen.getByAltText("search");
        fireEvent.click(closeIcon);

        expect(handleClearInputMock).toHaveBeenCalled();
    });

    it("abre el input al hacer clic en el contenedor", () => {
        const setIsOpenMock = vi.fn();
        vi.mocked(useClickOutside).mockReturnValue({
            isOpen: false,
            setIsOpen: setIsOpenMock,
            componentRef: { current: null },
        });

        render(<Search />);

        const container = screen.getByRole("textbox").parentElement;
        fireEvent.click(container!);

        expect(setIsOpenMock).toHaveBeenCalledWith(true);
    });
});
