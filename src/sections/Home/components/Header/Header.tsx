import PodcastsChips from "./components/PodcastsChips";
import Search from "./components/Search";

const Header = () => {
    return (
        <div className="flex flex-col gap-4 md:py-8 md:px-24">
            <Search />
            <PodcastsChips />
        </div>
    );
};

export default Header;
