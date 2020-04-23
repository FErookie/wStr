const app = require('../index');
const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync("./ssl/selfsigned.key"),
    cert: fs.readFileSync("./ssl/selfsigned.crt")
}
https.createServer(options, app.callback()).listen(3000, ()=>{
    console.log("成功启动https");
})
