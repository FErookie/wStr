const User = require('../libs/user');
const {addUser} = require('../services/authHandler');

async function addFaker() {
    let user = {
        openId: "onw_V5PGMl41LqZMQ3jAfthh3XXz",
        sessionKey: "+35cwRJOvZRzKTXNsc9H9g==",
        headImage: "",
        nickname: ""
    };
    let token = await (new User('123')).setUser(user);
    console.log(token);
    await addUser("", user.openId, user.sessionKey, "", user.headImage, user.nickname);
}

addFaker();
