const db = require('../models/index');
const {User, Team, teamToUser, UserDetails} = db.models;
const {parseFindAll} = require('../utils');

exports.queryStatus = async function (userId, teamId) {
    let relationShip = await teamToUser.findOne({
        where: {
            UserId: userId,
            TeamId: teamId
        }
    })
    console.log(relationShip);
    return relationShip === null;
}//用来看当前用户是不是已经存在在这个队伍里了

exports.getMyTeam = async function (openId) {
    return db.transaction(function (t) {
        return User.findOne({
            where: {
                openId: openId
            }
        }, {transaction: t}).then(async function (user) {
            let list = await teamToUser.findAll({
                where: {
                    UserId: user.id,
                    isOwner: true
                }
            });
            let res = [];
            for (let element of list) {
                res.push(element.dataValues);
            }
            return res;
        }).catch(function (err) {
            throw new Error(err);
        })
    })
};//这里包括所有和参与的

exports.getCompetitionTeam = async function (offset, competitionId, limit = 10) {
    let list = await Team.findAll({
        where: {
            CompetitionId: competitionId
        },
        offset: offset,
        limit: limit
    });
    return parseFindAll(list);
};//根据比赛id拿到队伍列表
exports.getCompetitionTeamDetails = async function (offset, competitionId, limit = 10, schoolName = null) {
    let list = await Team.findAll({
        where: {
            CompetitionId: competitionId
        },
        offset: offset,
        limit: limit
    });
    //首先 要从所有的这个list中的每一个的信息里得到对应的User 和 UserDetail 然后返回
    let data = parseFindAll(list);
    console.log(data);
    let res = [];
    for (let element of data) {
        //这个也只会有一个
        let userIDs = await teamToUser.findAll({
            where: {
                TeamId: element.id,
                isOwner: true
            },
        });
        console.log(userIDs);
        if (schoolName !== null) {
            let userDetail = await UserDetails.findOne({
                where: {
                    UserId: userIDs[0].dataValues.UserId,
                    schoolName: schoolName
                }
            });
            if (userDetail) {
                res.push({
                    teamData: element,
                    userData: userDetail
                });
            }
        } else {
            let userDetail = await UserDetails.findOne({
                where: {
                    UserId: userIDs[0].dataValues.UserId,
                }
            });
            res.push({
                teamData: element,
                userData: userDetail
            });
        }
    }
    return res;
};//根据比赛id拿到队伍列表
exports.joinTeam = async function (userId, teamId) {
    await teamToUser.create({
        isOwner: false,
        TeamId: teamId,
        UserId: userId
    })
};
// createTeam现在有个问题就是要传过来比赛的id
exports.createTeam = async function (openId, postTime, details, needPerson, finTime, competitionId) {
    return db.transaction(function (t) {
        return User.findOne({
            where: {
                openId: openId
            }
        }, {transaction: t}).then(async function (user) {
            let team = await Team.create({
                postTime: postTime,
                details: details,
                needPerson: needPerson,
                finTime: finTime,
                CompetitionId: competitionId
            });
            console.log(team);
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
