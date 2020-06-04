module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        unionId: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        openId: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sessionKey: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        headImage: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        nickname: {
            type: DataTypes.STRING(32),
            defaultValue: '游客'
        }
    },{
        associate: (models) => {
            let {UserDetails, User} = models;
            User.hasOne(UserDetails);
            UserDetails.belongsTo(User);
        }
    })
};
