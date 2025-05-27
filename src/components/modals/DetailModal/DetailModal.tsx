import { useAnimateDetail } from "@/hooks/useAnimateDetail";
import { useCallback, useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import Episodes from "./components/Episodes";
import DetailHeader from "./components/DetailHeader";
import { usePodcastDetailStore } from "@/stores/usePodcastDetailStore";

const DetailModal = () => {
    const { selectedPodcastData, isDetailOpen, toggleIsDetailOpen } =
        usePodcastDetailStore();
    const { image, title, description } = selectedPodcastData || {};
    const {
        showDetail,
        toggleShowDetail,
        scrollRef,
        imageScale,
        descriptionOpacity,
        isDetailMinimized,
        descriptionHeight,
        descriptionRef,
    } = useAnimateDetail(description ?? "");

    const handleKeyDown = useCallback(
        ({ key }: KeyboardEvent): void => {
            if (key === "Escape" && isDetailOpen) {
                toggleIsDetailOpen();
            }
        },
        [toggleIsDetailOpen, isDetailOpen]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleIsDetailOpen, handleKeyDown]);

    useEffect(() => {
        if (isDetailOpen && window.innerWidth <= 768) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            if (window.innerWidth <= 768) {
                document.body.style.overflow = "auto";
            }
        };
    }, [isDetailOpen]);

    useEffect(() => {
        const scrollToTop = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = 0;
            }
        };

        setTimeout(scrollToTop, 0);
    }, [scrollRef, selectedPodcastData?.id]);

    const handleCloseDetail = () => {
        if (showDetail) toggleShowDetail();
        toggleIsDetailOpen();
    };

    return (
        <Fragment>
            {/* Backdrop Overlay */}
            <div
                onClick={handleCloseDetail}
                className={
                    !isDetailOpen ? "hidden" : `w-screen h-screen fixed z-10`
                }
            />

            {/* Detail Modal */}
            <div
                ref={scrollRef}
                className={`overflow-y-auto w-[100vw] h-[85vh] md:w-[480px] md:h-[100%] bg-[#0F0F2D] fixed z-10 ${
                    isDetailOpen ? "bottom-0" : "-bottom-[100vh]"
                } md:top-0 ${
                    isDetailOpen ? "md:left-0" : "md:-left-500"
                } duration-600 ease-in-out flex flex-col justify-start items-center text-white max-[768px]:rounded-t-[30px] md:rounded-r-[30px]`}
            >
                <DetailHeader
                    imageScale={imageScale}
                    descriptionOpacity={descriptionOpacity}
                    isDetailMinimized={isDetailMinimized}
                    descriptionHeight={descriptionHeight}
                    descriptionRef={descriptionRef}
                    handleCloseDetail={handleCloseDetail}
                    image={image ?? ""}
                    title={title ?? ""}
                    description={description ?? ""}
                    showDetail={showDetail}
                    toggleShowDetail={toggleShowDetail}
                />
                <div className="w-full px-6 md:px-12 flex flex-col gap-10 flex-1 pb-8 relative z-0">
                    <Episodes title={title} />
                </div>
            </div>
        </Fragment>
    );
};

export default DetailModal;
