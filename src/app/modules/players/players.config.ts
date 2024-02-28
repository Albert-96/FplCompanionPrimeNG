export const PlayersConfig = {
  columns: [
    {
      dataField: 'web_name',
      caption: 'Name',
      width: 150,
      dataType: 'string',
      visible: true,
      visibleIndex: 1,
    },
    {
      dataField: 'teamInfo.name',
      caption: 'Club',
      width: 100,
      dataType: 'string',
      visible: true,
      visibleIndex: 2,
    },
    {
      dataField: 'positionInfo.singular_name',
      caption: 'Position',
      width: 130,
      dataType: 'string',
      visible: true,
      visibleIndex: 3,
    },
    {
      dataField: 'current_cost',
      caption: 'Cost',
      width:100,
      dataType: 'number',
      visible: true,
      visibleIndex: 4,
    },
    {
      dataField: 'chance_of_playing_this_round_string',
      caption: 'Appearance chance',
      width: 220,
      dataType: 'string',
      alignment: 'right',
      visible: false,
    },
    {
      dataField: 'chance_of_playing_next_round_string',
      caption: 'Next Week Appearance chance',
      width: 310,
      dataType: 'string',
      alignment: 'right',
      visible: false,
    },
    {
      dataField: 'ep_next',
      caption: 'Next Week Expected Points',
      width: 300,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'ep_this',
      caption: 'Expected Pts',
      width: 170,
      dataType: 'number',
      visible: true,
      visibleIndex: 7,
    },
    {
      dataField: 'event_points',
      caption: 'Previous Week Pts',
      width: 210,
      dataType: 'number',
      visible: true,
      visibleIndex: 6,
    },
    {
        dataField: 'first_name',
        caption: 'First Name',
        width: 300,
        dataType: 'string',
        visible: false,
    },
    {
      dataField: 'form',
      caption: 'Form',
      width: 100,
      dataType: 'number',
      visible: true,
      visibleIndex: 5,
    },
    {
      dataField: 'in_dreamteam',
      caption: 'Dream Team',
      width: 160,
      dataType: 'boolean',
      visible: false,
    },
    {
      dataField: 'news',
      caption: 'Player News',
      width: 500,
      dataType: 'string',
      visible: true,
      visibleIndex: 17,
    },
    {
      dataField: 'points_per_game',
      caption: 'Pts/Game',
      width: 140,
      dataType: 'number',
      visible: true,
      visibleIndex: 8,
    },
    {
      dataField: 'second_name',
      caption: 'Last Name',
      width: 300,
      dataType: 'string',
      visible: false,
    },
    {
      dataField: 'selected_by_percent_string',
      caption: 'Squad Selection',
      width: 190,
      dataType: 'string',
      visible: true,
      alignment: 'right',
      visibleIndex: 9,
    },
    {
      dataField: 'total_points',
      caption: 'Total Pts',
      width: 130,
      dataType: 'number',
      visible: true,
      visibleIndex: 10,
    },
    {
      dataField: 'transfers_in',
      caption: 'Transfers In',
      width: 160,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'transfers_out',
      caption: 'Transfers Out',
      width: 170,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'value_form',
      caption: 'Form Value',
      width: 150,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'value_season',
      caption: 'Cost Value',
      width: 150,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'minutes',
      caption: 'Total minutes',
      width: 170,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'goals_scored',
      caption: 'Goals',
      width: 110,
      dataType: 'number',
      visible: true,
      visibleIndex: 11,
    },
    {
      dataField: 'assists',
      caption: 'Assists',
      width: 120,
      dataType: 'number',
      visible: true,
      visibleIndex: 12,
    },
    {
      dataField: 'clean_sheets',
      caption: 'Clean sheets',
      width: 170,
      dataType: 'number',
      visible: true,
      visibleIndex: 13,
    },
    {
      dataField: 'goals_conceded',
      caption: 'Goals Conceded',
      width: 190,
      dataType: 'number',
      visible: true,
      visibleIndex: 14,
    },
    {
      dataField: 'penalties_saved',
      caption: 'Penalties saved',
      width: 190,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'penalties_missed',
      caption: 'Penalties missed',
      width: 200,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'yellow_cards',
      caption: 'Yellow cards',
      width: 160,
      dataType: 'number',
      visible: true,
      visibleIndex: 15,
    },
    {
      dataField: 'red_cards',
      caption: 'Red cards',
      width: 140,
      dataType: 'number',
      visible: true,
      visibleIndex: 16,
    },
    {
      dataField: 'saves',
      caption: 'Saves',
      width: 120,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'bonus',
      caption: 'Total Bonus Points',
      width: 210,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'bps',
      caption: 'Total Bonus Point System',
      width: 260,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'influence_rank',
      caption: 'FPL Influence Rank',
      width: 210,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'creativity_rank',
      caption: 'FPL Creativity Rank',
      width: 220,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'threat_rank',
      caption: 'FPL Goal Threat Rank',
      width: 230,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'ict_index_rank',
      caption: 'FPL ICT Index Rank',
      width: 210,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'corners_and_indirect_freekicks_order',
      caption: 'Corners Order',
      width: 180,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'direct_freekicks_order',
      caption: 'Free Kick Order',
      width: 190,
      dataType: 'number',
      visible: false,
    },
    {
      dataField: 'penalties_order',
      caption: 'Penalties Order',
      width: 190,
      dataType: 'number',
      visible: false,
    },
  ]
}