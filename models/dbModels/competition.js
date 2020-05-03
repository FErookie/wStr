module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Competition',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        type: {
            type: DataTypes.TEXT,
            defaultValue: '其他'
        },
        title: {
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
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('finTime')).format('YYYY-MM-DD HH:mm:ss')
            }
        }
    })
};
