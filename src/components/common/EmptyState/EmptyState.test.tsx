import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
    it("se renderiza con el mensaje por defecto", () => {
        render(<EmptyState />);
        expect(screen.getByText("No results found")).toBeInTheDocument();
    });

    it("se renderiza con un mensaje personalizado", () => {
        render(<EmptyState message="No podcasts available" />);
        expect(screen.getByText("No podcasts available")).toBeInTheDocument();
    });

    it("renderiza la imagen cuando se pasa una URL", () => {
        render(<EmptyState imageUrl="/fake-image.svg" imageAlt="Test image" />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", "/fake-image.svg");
        expect(image).toHaveAttribute("alt", "Test image");
    });

    it("aplica las clases personalizadas a la imagen", () => {
        render(
            <EmptyState
                imageUrl="/fake-image.svg"
                imageClassname="custom-class"
            />
        );
        const image = screen.getByRole("img");
        expect(image).toHaveClass("custom-class");
    });

    it("no renderiza la imagen si no se pasa una URL", () => {
        render(<EmptyState />);
        expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
});
