import { Fragment } from "react";
import Skeleton from "../Skeleton";

const DetailSkeleton = () => {
    return (
        <Fragment>
            <div className="w-full flex justify-start ">
                <Skeleton width="20%" height="12px" />
            </div>
            <div className="w-full flex flex-col">
                {Array(4)
                    .fill({})
                    ?.map((_, ix) => (
                        <div
                            key={ix}
                            className="w-full flex px-4 py-4 justify-between items-center border-b border-[#ffffff4c]"
                        >
                            <div className="w-full flex gap-4 items-center">
                                <Skeleton width="40px" height="40px" />
                                <div className="w-full flex flex-col justify-center items-start gap-2">
                                    <Skeleton width="80%" height="12px" />
                                    <Skeleton width="20%" height="10px" />
                                </div>
                            </div>
                            <div className="w-fit h-fit p-3 ml-4 bg-white hover:bg-gray-300 duration-300 ease-in-out rounded-full cursor-pointer self-end">
                                <img
                                    src="/src/assets/play-icon.svg"
                                    alt="play icon"
                                    className="w-[14px] md:min-w-[18px] h-[14px] md:h-[18px] relative left-[1px]"
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </Fragment>
    );
};

export default DetailSkeleton;
