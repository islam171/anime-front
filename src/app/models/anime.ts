export interface IAnime {
    id: number;
    title: string;
    image: string;
    episodes: number | null;
    trailerURL: number | null;
    desc: string | null;
    status: string;
    year: number | null;
    rating: string;
    genres: { id: number; name: string   }[];
    studios: { id: number; name: string, image: string }[];
}


export interface IAnimeResponse {
    data: IAnime[];
}

export interface IAnimeDetailResponse {
    data: IAnime;
}