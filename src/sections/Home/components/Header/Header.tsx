import PodcastsChips from "./components/PodcastsChips";

const Header = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1 className="text-[40px] font-black">Podcast</h1>
            </div>

            <PodcastsChips />
        </div>
    );
};

export default Header;
