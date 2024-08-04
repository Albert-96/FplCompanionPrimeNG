export class Routes {
    public static player: string = 'player/all';
    public static dreamTeamEvents: string = 'deamteam/events';
    public static eventFixtures: string = 'fixture/event';
    public static playerDetail: string = 'player';
}

export class ImageResource {
    public static player: string = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p{0}.png';
    public static clubLarge: string = 'https://resources.premierleague.com/premierleague/badges/70/t{0}.png';
    public static clubSmall: string = 'https://resources.premierleague.com/premierleague/badges/50/t{0}.png';
}

export enum MediaDevice {
    XSmall = 1,
    Small = 2,
    Medium = 3,
    Large = 4
}