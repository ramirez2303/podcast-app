import PodcastsChips from "./components/PodcastsChips";
import Search from "./components/Search";

type HeaderProp = {
    chipSelected: "trending" | "favorites";
    handleChipSelected: (chip: "trending" | "favorites") => void;
};

const Header = ({ chipSelected, handleChipSelected }: HeaderProp) => {
    return (
        <div className="flex flex-col gap-2 md:py-8 md:px-24 max-w-[100vw]">
            <Search />
            <PodcastsChips
                chipSelected={chipSelected}
                handleChipSelected={handleChipSelected}
            />
        </div>
    );
};

export default Header;
