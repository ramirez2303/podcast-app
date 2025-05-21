import { getTrendingPodcasts } from "@/services/getTrendingPodcast";
import { useQuery } from "@tanstack/react-query";
import { useTrendingStore } from "@/stores/useTrendingStore";
import type { PodcastResponse } from "@/types";
import { useEffect } from "react";

export const useTrendingPodcast = () => {
    const { setTrendingPodcasts } = useTrendingStore();

    const { data, isLoading, isError } = useQuery<PodcastResponse>({
        queryKey: ["trendingPodcasts"],
        queryFn: getTrendingPodcasts,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (!!data?.feeds && !isLoading) {
            setTrendingPodcasts(data.feeds);
        }
    }, [data, isLoading, setTrendingPodcasts]);

    return {
        isLoading,
        isError,
    };
};
