import { ITeamView } from "./ITeamView";

export interface IFixtureView {
    id: number;
    code: number;
    event: number;
    started: boolean;
    finished: boolean;
    kickoff_time: Date;
    home: ITeamView;
    away: ITeamView;
    team_h_score: number | null;
    team_a_score: number | null;
    team_h_difficulty: number;
    team_a_difficulty: number;
}