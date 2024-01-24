export type SeasonStanding = {
    idLeague: number;
    season: string;
    teamId: number;
    position: number;
    groupName: string;
    played: number;
    win: number;
    percWin: number;
    lose: number;
    percLose: number;
    pointsFor: number;
    pointsAgainst: number;
    description: string;
}

export type SeasonStandingAll = {
    standings: SeasonStanding;
    teamName: string;
    logo: string;
} 

export type SeasonStandingAllUpdate = {
    standings: SeasonStanding;
    teamName: string;
    teamLogo: string;
}