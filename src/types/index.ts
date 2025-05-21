export type Podcast = {
    id: number;
    url: string;
    title: string;
    description: string;
    author: string;
    image: string;
    artwork: string;
    newestItemPublishTime: number;
    itunesId: number;
    trendScore: number;
    language: string;
    categories: Record<string, string>;
};

export type PodcastList = Podcast[];

export type PodcastResponse = {
    status: string;
    count: number;
    max: number;
    since: number;
    description: string;
    feeds: PodcastList;
};
