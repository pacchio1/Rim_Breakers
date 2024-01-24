import { LeagueByCountry } from "./leagues.model"

export type Countries = {
    id_country: number,
    flag: string,
    name: string
}

export type CountriesWithLeagues = {
    id_country: number,
    flag: string,
    leagues: LeagueByCountry
    name: string
}