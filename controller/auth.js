const request = require("superagent");
const {wxConfig} = require("../conf");
const User = require('../libs/user');
const {addUser, checkUser, createUserInfo, updateUserInfo, queryUserDetails, getId} = require('../services/authHandler');
const returns = require('../libs/return');

function getSessionKey(code, appId, appSecret){
    return new Promise((resolve, reject) => {
        request
            .get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`)
            .end((err, res) => {
                if(err){
                    reject(err);
                }else{
                    resolve(res.text);
                }
            })
    })
}

exports.login = async function(ctx){
    ctx.checkBody("code").notEmpty();
    let data = ctx.request.body;
    let res = JSON.parse(await getSessionKey(data.code, wxConfig.appId, wxConfig.appSecret));
    //用openid去检查是不是数据库中有内容 如果有就算了 没有就发token
    //下面是发token的逻辑`
    let user = {
        openId: res['openid'],
        sessionKey: res['session_key'],
        headImage: data.avatarUrl,
        nickname: data.nickName
    };
    console.log(user.openId);
    try{
        let status = await checkUser(user.openId);
        let token = await (new User('123')).setUser(user);
        if(status){
            await addUser("" , user.openId, user.sessionKey, "", user.headImage, user.nickname);
            await createUserInfo(user.openId,  user.headImage, user.nickname);
        }
        let id = await getId(user.openId);
        let details = await queryUserDetails(id);
        ctx.returns({
            "token": token,
            "details": details
        });
    }catch (e) {
        console.log(e);
        ctx.body = (e);
    }
};

exports.updateInfo = async function(ctx){
    ctx.checkBody("schoolName").notEmpty();
    ctx.checkBody("wx").notEmpty();
    ctx.checkBody("phone").notEmpty();
    ctx.checkBody("qq").notEmpty();

    let data = ctx.request.body;
    let user = await ctx.customUser.getUser();
    await updateUserInfo(user.openId, data.schoolName, data.wx, data.phone, data.qq);
    ctx.returns(returns.code.SUCCESS, "success", null);

};

exports.getInfo = async function(ctx) {
    ctx.checkBody("userId").notEmpty();

    let id = ctx.request.body.userId;
    let res = await queryUserDetails(id);
    ctx.returns(returns.code.SUCCESS, res, null);
}
