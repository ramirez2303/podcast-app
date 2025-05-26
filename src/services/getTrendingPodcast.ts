import podcastApi from "@/lib/podcastApi";

export const getTrendingPodcasts = async () => {
    const response = await podcastApi.get("/podcasts/trending?max=100");
    return response.data;
};

