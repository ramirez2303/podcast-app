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

export type Episode = {
    id: number;
    podcastTitle: string;
    title: string;
    link: string;
    description: string;
    guid: string;
    datePublished: number;
    datePublishedPretty: string;
    dateCrawled: number;
    enclosureUrl: string;
    enclosureType: string;
    enclosureLength: number;
    duration: number;
    explicit: number;
    episode: number;
    episodeType: string;
    season: number;
    image: string;
    feedItunesId: number;
    feedUrl: string;
    feedImage: string;
    feedId: number;
    podcastGuid: string;
    feedLanguage: string;
    feedDead: number;
    feedDuplicateOf: string | null;
    chaptersUrl: string | null;
    transcriptUrl: string | null;
};

export type EpisodesList = Episode[];

export type EpisodesResponse = {
    count: number;
    description: string;
    items: EpisodesList;
    liveItems?: EpisodesList;
    query: string;
    status: string;
};
