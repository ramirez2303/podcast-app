import podcastApi from "@/lib/podcastApi";

export const getPodcastSearch = async (debouncedValue: string) => {
    const response = await podcastApi.get(
        `/search/bytitle?q=${debouncedValue}&max=8`
    );
    return response.data.feeds;
};
