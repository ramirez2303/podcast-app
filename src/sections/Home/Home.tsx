import { useSearchStore } from "@/stores/useSearchStore";
import DetailSection from "./components/DetailSection";
import FavoritesSection from "./components/FavoritesSection";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import TrendingSection from "./components/TrendingSection";
import { useState } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Home = () => {
    const { isSearching } = useSearchStore();
    const [chipSelected, setChipSelected] = useState<"trending" | "favorites">(
        "trending"
    );
    const { isPlayerOpen } = usePlayerStore();
    const handleChipSelected = (chip: "trending" | "favorites") =>
        setChipSelected(chip);

    return (
        <div className="min-w-[100vw] min-h-[100vh] flex flex-col gap-10 md:gap-6 relative font-[Raleway]">
            <Header
                chipSelected={chipSelected}
                handleChipSelected={handleChipSelected}
            />
            <div
                className={`md:mx-auto max-w-[100vw] md:max-w-[85%] min-[1700px]:max-w-[70%] flex justify-center items-center py-0 max-[768px]:px-8 md:px-0 md:py-8 max-[1600px]:px-24 ${
                    isPlayerOpen ? "pb-36" : "pb-12 md:pb-24"
                }`}
            >
                {isSearching && <SearchSection />}
                {chipSelected === "trending" && !isSearching && (
                    <TrendingSection />
                )}
                {chipSelected === "favorites" && !isSearching && (
                    <FavoritesSection />
                )}
            </div>
            <DetailSection />
        </div>
    );
};

export default Home;
