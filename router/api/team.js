const {createTeam, getCompetitionTeam, getMyTeam, getCompetitionTeamDetails} = require("../../controller/team");
module.exports = (router) => {
    router.post('/team/createTeam', createTeam);
    router.post('/team/getCompetitionTeam', getCompetitionTeam);
    router.post('/team/getCompetitionTeamDetails', getCompetitionTeamDetails);
    router.get('/team/getMyTeam', getMyTeam);
};
