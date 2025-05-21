import PodcastsChips from "./components/PodcastsChips";
import Search from "./components/Search";

const Header = () => {
    return (
        <div className="flex flex-col gap-2 md:py-8 md:px-24 max-w-[100vw]">
            <Search />
            <PodcastsChips />
        </div>
    );
};

export default Header;
