// Rank engine

$(document).ready(function() {
	_.each(games, function(game) {
		var team1 = teams[game.team1];
		var team2 = teams[game.team2];
		
		team1.gamesPlayed++:
		team2.gamesPlayed++;
		
		var team1FinalScore = game.qpTeam1 + (game.catchTeam === game.team1 ? 30 : 0);
		var team2FinalScore = game.qpTeam2 + (game.catchTeam === game.team2 ? 30 : 0);
		
		if (team1FinalScore > team2FinalScore) {
			team1.wins++;
		} else {
			team2.wins++;
		}
		
		team1.winPct = (team1.wins * 1.0) / team1.gamesPlayed;
		team2.winPct = (team2.wins * 1.0) / team2.gamesPlayed;
		
		
	}
}