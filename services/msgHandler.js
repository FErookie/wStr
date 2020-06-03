const db = require('../models/index');
const {message, teamToUser, Team, User} = db.models;
const {parseFindAll} = require('../utils');
exports.dispatchMessage = async function (userid, teamId, description) {
    // 这个userid是发的人的userid
    await message.create({
        userId: userid,
        teamId: teamId,
        describeText: description
    })
};

exports.getMyTeamApply = async function (TeamId) {
    let data = await message.findAll({
        where: {
            teamId: TeamId
        }
    });
    let teamMessage = await Team.findOne({
        where: {
            teamId: TeamId
        }
    });
    return {
        messageData: parseFindAll(data),
        teamData: teamMessage
    };
};

exports.getMyFeedBack = async function (userId) {
    let data = await message.findAll({
        where: {
            userId: userId
        }
    });
    return parseFindAll(data);
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

exports.deleteMessage = async function (msgId) {
    let data = await message.findOne({
        where: {
            id: msgId
        }
    });
    if (data.dataValues.hasDeal) {
        return data.dataValues.teamId;
    } else {
        message.destroy({
            where: {
                id: msgId
            }
        })
        return false;
    }
}
