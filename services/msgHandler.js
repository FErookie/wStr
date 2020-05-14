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

exports.getMyTeamApply = async function (TeamId) {
    let data = await message.findAll({
        where: {
            teamId: TeamId
        }
    });
    return data;
};

exports.getMyFeedBack = async function (userId) {
    let data = await message.findAll({
        where: {
            userId: userId
        }
    });
    return data;
};

exports.updateMsg = async function (msgId, isDeal, status, text) {
    message.update({
        hasDeal: isDeal,
        status: status,
        describeText: text
    },{
        where: {
            id: msgId
        }
    })
}

exports.getMsg = async function (msgId) {
    let data = await message.findOne({
        where: {
            id: msgId
        }
    });
    return data.dataValues;
}
