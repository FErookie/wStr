const path = require('path');
const root = path.resolve(__dirname, '../');
const logDir = path.join(root, 'log');

module.exports = {
    db: {
        name: 'postgres',
        username: 'postgres',
        pwd: 'gaoshuda',
        host: '127.0.0.1',
        database: 'wstrdatabase',
        toUrl(){
            return `${this.name}://${this.username}:${this.pwd}@${this.host}/${this.database}`
        }
    },
    redisConfig: {
        host:'127.0.0.1',
        port:'6379',
        password:'',
        toConfig() {
            if(this.password===''){
                return `redis://${this.host}:${this.port}`
            }
            else {
                return `redis://:${this.password}@${this.host}:${this.port}`;
            }
        }
    },
    wxConfig:{
        appId: 'wx08501d23335ee1ad',
        appSecret: '5acbb04113c5600993c08890ea9011f7',
    },
    log: {
        root: logDir,
        err: path.join(logDir, 'err.log'),
        info: path.join(logDir, 'info.log')
    },
}
