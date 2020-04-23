const path = require('path');

module.exports = {
    db: {
        name: 'postgres',
        username: 'postgres',
        pwd: 'gaoshuda',
        host: '127.0.0.1',
        database: 'postgres',
        toUrl(){
            return `${this.name}://${this.username}:${this.pwd}@${this.host}/${this.database}`
        }
    },
    redisConfig: {

    }
}
