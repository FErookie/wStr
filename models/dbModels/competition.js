module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Competition',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        status: {
            type: DataTypes.TEXT,
            defaultValue: '薛定谔的比赛'
        },
        type: {
            type: DataTypes.TEXT,
            defaultValue: '其他'
        },
        title: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        level: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sponsor: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        registration: {
            type: DataTypes.TEXT
        },
        finTime: {
            type: DataTypes.TEXT
        }
    })
};
