module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserDetails',{
        schoolName: {
            type: DataTypes.TEXT,
            defaultValue: '克莱登大学'
        },
        contact_wx: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        contact_phone: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        contact_qq: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        headImage: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        nickname: {
            type: DataTypes.STRING(32),
            defaultValue: '游客'
        }
    })
};
