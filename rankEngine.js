// Rank engine

$(document).ready(function() {
	_.each(games, function(game) {
		var team1 = teams[game.team1];
		var team2 = teams[game.team2];
		var team1Perf = 0;
		var team2Perf = 0;
		var winner = null;
		
		team1.gamesPlayed++;
		team2.gamesPlayed++;
		
		var team1FinalScore = game.qpTeam1 + (game.catchTeam === game.team1 ? 30 : 0);
		var team2FinalScore = game.qpTeam2 + (game.catchTeam === game.team2 ? 30 : 0);
		
		if (team1FinalScore > team2FinalScore) {
			team1.wins++;
			winner = team1.id;
		} else {
			team2.wins++;
			winner = team2.id;
		}
		
		team1.winPct = (team1.wins * 1.0) / team1.gamesPlayed;
		team2.winPct = (team2.wins * 1.0) / team2.gamesPlayed;
		
		
	}
}

function calculatePerf(game, team1, team2, winner) {
	var qpDiff = Math.abs(game.apTeam1 - game.qpTeam2);
	var qpDiff_Adj = Math.min(qpDiff, 80) + Math.sqrt(Math.max(qpDiff - 80, 0));
	var swim = qpDiff_Adj;
	var team1Swim = 0;
	var team2Swim = 0;
	
	if (winner === game.catchTeam) {
		var multiplier = 1;
		if (qpDiff_Adj >= 30) {
			multiplier = Math.pow(Math.E, -0.033 * (qpDiff_Adj - 20));
		}
		swim += 30 * multiplier;
	}
	
	if (team1 === winner) {
		team1Swim = swim;
		team2Swim = -swim;
	} else {
		team1Swim = -swim;
		team2Swim = swim;
	}
	
	var swimScaled = swim - _findLowestSwim();
}

function _findLowestSwim() {
	return _.min(_.pluck(teams, 'swim'));
}



