const {createTeam, getCompetitionTeam, getMyTeam} = require("../../controller/team");
module.exports = (router) => {
    router.post('/team/createTeam', createTeam);
    router.post('/team/getCompetitionTeam', getCompetitionTeam);
    router.get('/team/getMyTeam', getMyTeam);
};
