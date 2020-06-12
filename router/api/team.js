const {deleteTeam, createTeam, getCompetitionTeam, getMyTeam, getCompetitionTeamDetails, getAllTeam, getTeamDetails, deleteMember, filterTeam} = require("../../controller/team");
module.exports = (router) => {
    router.post('/team/createTeam', createTeam);
    router.post('/team/getCompetitionTeam', getCompetitionTeam);
    router.post('/team/getCompetitionTeamDetails', getCompetitionTeamDetails);
    router.get('/team/getMyTeam', getMyTeam);
    router.post('/team/getAllTeam', getAllTeam);
    router.post('/team/getTeamDetails', getTeamDetails);
    router.post('/team/deleteMember', deleteMember);
    router.post('/team/deleteTeam', deleteTeam);
    router.post('/team/filterTeam', filterTeam);	
};
