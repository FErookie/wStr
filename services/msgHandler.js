const db = require('../models/index');
const {message, teamToUser, Team} = db.models;

exports.dispatchMessage = async function (userId, teamId) {
    await message.create({
        userId: userId,
        teamId: teamId
    })
};

exports.getMyTeamApply = async function(TeamId) {
    return message.findAll({
        where: {
            teamId: TeamId
        }
    });
}
