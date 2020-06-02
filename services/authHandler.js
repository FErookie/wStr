const db = require('../models/index');
const {User, UserDetails} = db.models;

exports.addUser = async function add_user(unionId , openId , sessionKey , phone ,headImage , nickname ){
    await User.create({
        unionId : unionId,
        openId : openId,
        sessionKey : sessionKey,
        phone : phone,
        headImage : headImage,
        nickname : nickname,
    });
};// 微信登录时同时触发这个方法

exports.checkUser = async function (openid) {
    return User.findAll({
        where: {
            openId : openid
        }
    }).then(data=>{
        return data[0] === undefined;
    })
};// 检测是不是第一次登录 好像没啥用

exports.createUserInfo = async function(openid, headImage, nickName){
    await User.findAll({
        where: {
            openId : openid
        }
    }).then(data=>{
        UserDetails.create({
            UserId: data[0].dataValues.id,
            nickname: nickName,
            headImage: headImage
        });
    })
};

exports.updateUserInfo = async function (openid, schoolName, contactWx, contactPhone, contactQQ) {
    let user = await User.findAll({
        where: {
            openId : openid
        }
    });
    UserDetails.update({
        schoolName: schoolName,
        contact_wx: contactWx,
        contact_phone: contactPhone,
        contact_qq: contactQQ
    },{
        where: {
            UserId: user[0].dataValues.id
        }
    })
};// 更新用户信息

exports.getId = async function (openid) {
    let res = await User.findAll({
        attributes: ['id'],
        where: {
            openId: openid
        }
    });
    return res[0].dataValues.id;
}

exports.queryUserDetails = async function(id) {
    let data = await UserDetails.findOne({
        where: {
            UserId: id
        }
    });
    return data.dataValues;
}
