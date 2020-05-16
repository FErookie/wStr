const db = require('../models/index');
const {message, teamToUser, Team, User} = db.models;
const {parseFindAll} = require('../utils');
exports.dispatchMessage = async function (userid, teamId, description) {
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
    return parseFindAll(data);
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
