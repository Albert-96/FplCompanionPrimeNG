import { ITeamView } from "./ITeamView";

export interface IElementFixtureView {
    id: number;
    code: number;
    event: number;
    minutes: number;
    finished: boolean;
    kickoff_time: string;
    home: ITeamView;
    away: ITeamView;
    team_h_score: number | null;
    team_a_score: number | null;
    difficulty: number;
    is_home: boolean;
}