const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Team',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        postTime: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('postTime')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        details: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        needPerson: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        finTime: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('finTime')).format('YYYY-MM-DD HH:mm:ss')
            }
        }
    },{
        associate: (models) => {
            let {Team, User, teamToUser, Competition} = models;
            Team.belongsToMany(User, {through: teamToUser});
            User.belongsToMany(Team, {through: teamToUser});
            Competition.hasMany(Team);
            Team.belongsTo(Competition);
        }
    })
};
