export interface IPopularState {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    total_pages: number;
    vote_average: any

}
export interface IDetailPage {
    quantity: number
    id: number;
    title: string;
    release_date: number;
    runtime: any;
    vote_average  : any;
    overview: string;
    // profile_path: string;
    backdrop_path: string;
    poster_path : string;
}