import { useClickOutside } from "@/hooks/useClickOutside";
import { useSearch } from "@/hooks/useSearch";
import { useSearchStore } from "@/stores/useSearchStore";
import closeIcon from "@/assets/close-icon.svg";
import searchIcon from "@/assets/search-icon.svg";

const Search = () => {
    const { isSearching } = useSearchStore();
    const { isOpen, setIsOpen, componentRef } = useClickOutside(isSearching);
    const { inputValue, handleInputChange, handleClearInput } = useSearch();
    const inputIcon = isSearching ? closeIcon : searchIcon;
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
                    value={inputValue}
                    className={` ${
                        isOpen
                            ? "w-[100vw] bg-[#EEEEEE] md:bg-transparent md:w-[360px] md:border-[#0F0F2D]"
                            : "w-[64px] border-transparent pointer-event-none"
                    } text-2xl font-semibold text-black md:border-2 h-[80px] md:h-[60px] md:rounded-full py-4 px-8 md:p-4 pr-20 gap-2 outline-none transition-width duration-300 ease-in-out cursor-pointer`}
                    onChange={handleInputChange}
                />
                <img
                    src={inputIcon}
                    alt="search"
                    onClick={() => isSearching && handleClearInput()}
                    className={`absolute cursor-pointer ${
                        isSearching
                            ? "w-[16px] md:w-[24px] right-18 md:right-8 brightness-[0] saturate-[100]"
                            : "w-[24px] md:min-w-[40px] right-16 md:right-6"
                    }`}
                />
            </div>
        </div>
    );
};

export default Search;
