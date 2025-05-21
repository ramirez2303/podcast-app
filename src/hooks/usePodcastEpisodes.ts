import { getPodcastEpisodes } from "@/services/getPodcastEpisodes";
import { usePodcastDetailStore } from "@/stores/usePodcastDetailStore";
import type { EpisodesResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const usePodcastEpisodes = () => {
    const { selectedPodcastId } = usePodcastDetailStore();
    const { data, isLoading, isError } = useQuery<EpisodesResponse>({
        queryKey: ["podcastEpisodes", selectedPodcastId],
        queryFn: () =>
            selectedPodcastId !== null
                ? getPodcastEpisodes(selectedPodcastId)
                : Promise.reject("No podcast ID"),
        enabled: !!selectedPodcastId,
        refetchOnWindowFocus: false,
    });

    return { data, isLoading, isError };
};
