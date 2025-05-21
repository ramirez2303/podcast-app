import { Fragment } from "react/jsx-runtime";
import { usePodcastDetailStore } from "../../stores/usePodcastDetailStore";

const PodcastCard = () => {
    const { setSelectedPodcastId } = usePodcastDetailStore();

    return (
        <Fragment>
            {/* // Card Mobile */}
            <div
                onClick={() => setSelectedPodcastId(1)}
                className="flex md:hidden items-center gap-4"
            >
                <div className="min-w-[80px] h-[80px] bg-red-300 rounded-xl" />
                <div className="flex flex-col">
                    <h3 className="text-xl font-black">New Heaven</h3>
                    <p className="text-sm/4 font-regular">
                        La historia de Pennan Hokkien, un gran jugador de
                        softball
                    </p>
                    <p className="text-xs font-medium mt-1">844 Episodios</p>
                </div>
                <img src="/src/assets/chevron-icon.svg" alt="chevron icon" />
            </div>

            {/* // Card Desktop */}
            <div
                onClick={() => setSelectedPodcastId(1)}
                className="hidden md:flex max-w-[270px] h-[344px] flex flex-col justify-between p-4 bg-gray-700 rounded-xl text-white relative bottom-0 hover:bottom-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
                <button className="w-[30px] h-[30px] self-end">
                    <img
                        src="/src/assets/star-icon.svg"
                        alt="favorite button"
                    />
                </button>
                <div className="flex flex-col">
                    <h3 className="text-lg font-black">New Heaven</h3>
                    <p className="text-sm font-bold">
                        The podcast of heavenly thinkers. Join for futuristic
                        ideas and the look of great minders.
                    </p>
                    <span className="flex items-center gap-2 mt-4">
                        <img
                            src="/src/assets/person-icon.svg"
                            alt="Autor Icon"
                            className=""
                        />
                        <p className="text-xs font-bold">por Dave Jonhes</p>
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default PodcastCard;
