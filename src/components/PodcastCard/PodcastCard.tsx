const PodcastCard = () => {
    return (
        <div className="max-w-[270px] h-[344px] flex flex-col justify-between p-4 bg-gray-700 rounded-xl text-white">
            <button className="w-[30px] h-[30px] self-end">
                <img src="/src/assets/star-icon.svg" alt="favorite button" />
            </button>
            <div className="flex flex-col">
                <h3 className="text-lg font-black">New Heaven</h3>
                <p className="text-sm font-bold">
                    The podcast of heavenly thinkers. Join for futuristic ideas
                    and the look of great minders.
                </p>
                <span className="flex items-center gap-2 mt-4">
                    <img src="/src/assets/person-icon.svg" alt="Autor Icon" className=""/>
                    <p className="text-xs font-bold">por Dave Jonhes</p>
                </span>
            </div>
        </div>
    );
};

export default PodcastCard;
