// ChipButton.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ChipButton from "./ChipButton";
import { vi } from "vitest";

describe("ChipButton", () => {
    it("se renderiza con label", () => {
        render(<ChipButton label="Prueba" onClick={() => {}} />);
        expect(screen.getByText("Prueba")).toBeInTheDocument();
    });

    it("ejecuta onClick al clickear", () => {
        const handleClick = vi.fn();
        render(<ChipButton label="Click me" onClick={handleClick} />);
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("no ejecuta onClick al estar disabled", () => {
        const handleClick = vi.fn();
        render(<ChipButton label="Disabled" onClick={handleClick} disabled />);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it("renderiza icono cuando se lo pasa", () => {
        render(
            <ChipButton label="Icon" onClick={() => {}} icon="/fake-icon.svg" />
        );
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", "/fake-icon.svg");
    });

    it("renderiza el contador cuando lo pasa", () => {
        render(<ChipButton label="Count" onClick={() => {}} count={5} />);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("aplica los estilos al estar en estado selected", () => {
        render(
            <ChipButton label="Selected" onClick={() => {}} selected={true} />
        );
        const button = screen.getByRole("button");
        expect(button.className).toMatch(/bg-\[#0F0F2D\]/);
    });
});
