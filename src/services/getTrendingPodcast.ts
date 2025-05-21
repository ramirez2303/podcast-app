import podcastApi from "@/lib/podcastApi";

export const getTrendingPodcasts = async () => {
    const response = await podcastApi.get("/podcasts/trending?max=8");
    return response.data;
};

