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

export type SeasonStandingUpdate = {
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
    teamLogo: string;
    teamName: string
}