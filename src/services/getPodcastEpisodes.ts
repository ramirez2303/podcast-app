import podcastApi from "@/lib/podcastApi";

export const getPodcastEpisodes = async (id: number) => {
    const response = await podcastApi.get(
        `/episodes/byfeedid?id=${id}&max=200`
    );
    return response.data;
};
