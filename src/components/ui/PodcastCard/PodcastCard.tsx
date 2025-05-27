import { usePodcastDetailStore } from "@/stores/usePodcastDetailStore";
import type { Podcast } from "@/types";
import { Fragment } from "react/jsx-runtime";
import SafeHtmlContent from "../SafeHtmlContent";
import FavoriteButton from "@/components/common/FavoriteButton";

interface PodcastCardProps {
    podcastData: Podcast;
}

const PodcastCard = ({ podcastData }: PodcastCardProps) => {
    const { handleOpenDetail } = usePodcastDetailStore();
    const { title, description, author, image } = podcastData;

    return (
        <Fragment>
            {/* // Card Mobile */}
            <div
                onClick={() => handleOpenDetail(podcastData)}
                className="flex md:hidden items-center gap-4 w-full"
                data-testid="mobile-podcast-card"
            >
                <div
                    className="min-w-[80px] h-[80px] bg-red-300 rounded-xl"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
                <div className="flex flex-col w-full max-h-[80px]">
                    <h3 className="text-xl font-black text-ellipsis overflow-hidden ">
                        {title}
                    </h3>
                    <SafeHtmlContent
                        className="text-sm/4 font-regular max-w-[50vw] max-h-[34px] text-ellipsis overflow-hidden pointer-events-none"
                        content={description}
                    />
                    <p className="text-xs font-medium mt-1">844 Episodios</p>
                </div>
                <img
                    src="/src/assets/chevron-icon.svg"
                    alt="chevron icon"
                    className="justify-self-end"
                />
            </div>

            {/* // Card Desktop */}
            <div
                data-testid="desktop-podcast-card"
                className="relative hidden md:block min-w-[270px] max-w-[270px] min-h-[344px] flex flex-col justify-end items-end p-4 rounded-xl text-white relative bottom-0 hover:bottom-2 transition-all duration-300 ease-in-out cursor-pointer shadow-lg"
            >
                <FavoriteButton
                    podcastData={podcastData}
                    className="absolute top-2 right-2 self-end cursor-pointer"
                />
                <div
                    onClick={() => handleOpenDetail(podcastData)}
                    className="h-full flex justify-center items-end"
                >
                    <div
                        className="absolute w-full h-full top-0 left-0 rounded-xl -z-2"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                    <div
                        className="absolute w-full h-full top-0 left-0 rounded-xl -z-1 opacity-50"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 33.16%, rgba(0, 0, 0, 1) 100%)",
                        }}
                    />
                    <div className="flex flex-col w-full">
                        <h3 className="text-lg font-black whitespace-nowrap text-ellipsis overflow-hidden">
                            {title}
                        </h3>
                        <SafeHtmlContent
                            className="text-sm font-bold max-h-[4rem] text-ellipsis overflow-hidden pointer-events-none"
                            content={description}
                        />
                        <span className="flex items-center gap-2 mt-4">
                            <img
                                src="/src/assets/person-icon.svg"
                                alt="Autor Icon"
                                className=""
                            />
                            <p className="text-xs font-bold whitespace-nowrap text-ellipsis overflow-hidden">
                                por {author}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PodcastCard;
