const transformLeagueTablesData = (data) => {
    return data.response[0].league.standings[0].map(team => ({
      position: team.rank,
      name: team.team.name,
      logo: team.team.logo,
      points: team.points,
      goalsFor: team.all.goals.for,
      goalsAgainst: team.all.goals.against,
      goalDifference: team.goalsDiff,
      form: team.form,
    }));
  };
  
  export { transformLeagueTablesData };
  