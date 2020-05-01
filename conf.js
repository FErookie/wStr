const path = require('path');

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
        appId: 'wxb70173be95a31d4f',
        appSecret: '2dbf0f12334ca7d3f5d2af78f664aa35',
    }
}
