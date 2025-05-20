import { useClickOutside } from "../../../../../../hooks/useClickOutside";

const Search = () => {
    const { isOpen, setIsOpen, componentRef } = useClickOutside();
    return (
        <div className="h-[80px] flex items-center md:justify-between">
            <h1 className="text-[40px] font-black pl-8 md:pl-0 block">
                Podcast
            </h1>
            <div
                ref={componentRef}
                className={`absolute top-0 right-0 md:relative w-fit h-fit flex items-center`}
                onClick={() => setIsOpen(true)}
            >
                <input
                    type="text"
                    placeholder={isOpen ? "Search" : ""}
                    className={` ${
                        isOpen
                            ? "w-[100vw] bg-[#EEEEEE] md:bg-transparent md:w-[360px] md:border-[#0F0F2D]"
                            : "w-[64px] border-transparent pointer-event-none"
                    } text-2xl font-semibold text-black md:border-2 h-[80px] md:h-[60px] md:rounded-full py-4 px-8 md:p-4 pr-20 gap-2 outline-none transition-width duration-300 ease-in-out cursor-pointer`}
                />
                <img
                    src="/src/assets/search-icon.svg"
                    alt="search"
                    className="absolute right-16 md:right-6 w-[24px] md:min-w-[40px] cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Search;
