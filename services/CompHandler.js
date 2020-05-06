const db = require('../models/index');
const {Competition} = db.models;

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
    console.log(res);
};

exports.getTypeCompetition = async function(type, offset, limit= 10){
    let res = await Competition.findAll({
        where: {
            type: type,
        },
        limit: limit,
        offset: offset
    });
    console.log(res);
};
