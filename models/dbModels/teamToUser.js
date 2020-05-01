module.exports = (sequelize, DataTypes) => {
    return sequelize.define('teamToUser', {
        isOwner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}
