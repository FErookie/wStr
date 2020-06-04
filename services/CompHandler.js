const db = require('../models/index');
const {Competition} = db.models;
const {parseFindAll} = require('../utils');

exports.addCompetition = async function(type, status, title, url, level, sponsor, registration, finTime) {
    await Competition.create({
        type: type,
        status: status,
        title: title,
        url: url,
        level: level,
        sponsor: sponsor,
        registration: registration,
        finTime: finTime
    });
};

exports.getType = async function(){
    let res = await Competition.findAll({
        attributes: ['type'],
        group: ['type']
    });
    let data = new Set();
    for (let element of res){
        data.add(element.dataValues.type);
    }
    return [].concat(...data);
};

exports.getTypeCompetition = async function(type, offset, limit= 10){
    let data = await Competition.findAll({
        where: {
            type: type,
        },
        limit: limit,
        offset: offset
    });
    return parseFindAll(data);
};

exports.getCompetition = async function(competitionId) {
    let data = await Competition.findOne({
        where: {
            id: competitionId
        }
    })
    return data === null ? data :  data.dataValues;
}
