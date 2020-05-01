const db = require('../models/index');
const {User, UserDetails} = db.models;

exports.addUser = async function add_user(unionId , openId , sessionKey , phone ,headImage , nickname ){
    User.create({
        unionId : unionId,
        openId : openId,
        sessionKey : sessionKey,
        phone : phone,
        headImage : headImage,
        nickname : nickname,
    });
};// 微信登录时同时触发这个方法

exports.checkUser = function (openid) {
    return User.findAll({
        where: {
            openId : openid
        }
    }).then(data=>{
        return data[0] === undefined;
    })
};// 检测是不是第一次登录 好像没啥用

exports.updateUserInfo = function () {

};// 更新用户信息

