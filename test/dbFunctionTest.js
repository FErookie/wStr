const {createTeam} = require('../services/teamHandler');
const {checkUser} = require('../services/authHandler');
const {getMyTeam} = require('../services/teamHandler');
const moment = require('moment');

let openId = "onw_V5PGMl41LqZMQ3jAfthh2GSg";
// checkUser(openId).then(res => {
//     console.log(res);
// });
// createTeam(openId, moment(), "测试用1", 0, moment());
async function main(){
    let res = await getMyTeam(openId);
    console.log(res);
}

main();
