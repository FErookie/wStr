const db = require('../models/index');
const {message, teamToUser, Team, User} = db.models;

exports.dispatchMessage = async function (openid, teamId) {
    let user = await User.findAll({
        where: {
            openId : openid
        }
    });
    await message.create({
        userId: user[0].dataValues.id,
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
