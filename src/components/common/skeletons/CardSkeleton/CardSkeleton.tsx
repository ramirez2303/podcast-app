import Skeleton from "@/components/ui/Skeleton";
import { Fragment } from "react/jsx-runtime";

const CardSkeleton = () => {
    return (
        <Fragment>
            {/* // Skeleton Mobile */}
            <div className="flex md:hidden items-center gap-4 w-full">
                <Skeleton width="80px" height="80px" />
                <div className="flex flex-col w-[50vw] max-h-[80px] gap-2">
                    <Skeleton width="70%" height="16px" />
                    <Skeleton width="100%" height="16px" />
                    <Skeleton width="40%" height="16px" />
                </div>
                <img
                    src="/src/assets/chevron-icon.svg"
                    alt="chevron icon"
                    className="justify-self-end"
                />
            </div>

            {/* // Skeleton Desktop */}
            <div className="relative hidden md:flex w-[270px] h-[344px] flex flex-col justify-between p-4 rounded-xl text-white relative bottom-0 hover:bottom-2 transition-all duration-300 ease-in-out bg-gray-100 border border-gray-200 shadow-xl">
                <div className="flex justify-end">
                    <Skeleton width="30px" height="30px" />
                </div>
                <div className="flex flex-col gap-2">
                    <Skeleton width="70%" height="16px" />
                    <Skeleton width="100%" height="16px" />
                    <Skeleton width="100%" height="16px" />
                    <Skeleton width="50%" height="16px" />
                </div>
            </div>
        </Fragment>
    );
};

export default CardSkeleton;
