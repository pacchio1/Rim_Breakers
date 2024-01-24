export type Leagues = {
    id: number;
    id_league: number;
    nameLeague: string;
    nameTeam: string;
    logoTeam: string;
}

export type LeagueByCountry = {
    id_country: number;
    id_league: number;
    flag: string;
    nameCountry: string;
    logo: string;
    nameLeague: string;
}