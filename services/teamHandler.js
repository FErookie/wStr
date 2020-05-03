const db = require('../models/index');
const {User, Team, teamToUser} = db.models;
exports.getMyTeam = async function(openId){
    return db.transaction(function (t) {
        return User.findOne({
            where: {
                openId: openId
            }
        }, {transaction: t}).then(async function (user) {
            let list = await teamToUser.findAll({
                where: {
                    UserId: user.id
                }
            });
            let res = [];
            for(let element of list){
                res.push(element.dataValues);
            }
            return res;
        }).catch(function (err) {
            throw new Error(err);
        })
    })
};

exports.joinTeam = async function() {

};
// createTeam现在有个问题就是要传过来比赛的id
exports.createTeam = async function(openId, postTime, details, needPerson, finTime) {
    return db.transaction(function(t){
        return User.findOne({
            where: {
                openId: openId
            }
        }, {transaction: t}).then(async function(user){
            let team = await Team.create({
                postTime: postTime,
                details: details,
                needPerson: needPerson,
                finTime: finTime
            });
            await teamToUser.create({
                isOwner: true,
                TeamId: team.dataValues.id,
                UserId: user.dataValues.id
            });
        }).catch(function (err) {
            throw new Error(err);
        });
    })
};
