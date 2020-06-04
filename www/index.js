const app = require('../index');
const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync("./ssl/2_www.ferookie.club.key"),
    cert: fs.readFileSync("./ssl/1_www.ferookie.club_bundle.crt")
}
https.createServer(options, app.callback()).listen(3000, ()=>{
    console.log("成功启动https");
})
