/*function Game(team1, team2, qPtTeam1, qPtTeam2, snitchCatchTeam, OT, OTCatch, time) {
	this.team1 = team1;
	this.team2 = team2;
	this.qPtTeam1 = qPtTeam1;
	this.qPtTeam2 = qPtTeam2;
	this.snitchCatchTeam = snitchCatchTeam;
	this.OT = OT;
	this.OTCatch = OTCatch;
	this.time = time;
}

var obj = new Game();*/

var games = [
	{
		team1: 'LEE',
		team2: 'QCB',
		qpTeam1: 100,
		qpTeam2: 70,
		catchTeam: 'LEE',
		OT: false,
		OTCatch: null,
		time: '25:00' // TODO: Switch to datetime. Use momentjs?
	},
];

console.log();
$('#container').html(teams.LEE.fullName);