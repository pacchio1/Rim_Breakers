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