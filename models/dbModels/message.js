// 这个表的作用是做一个申请表使用 表示用户申请加入队伍 表中的数据应该是处理完就直接删除的

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('message',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        userId: {
            type: DataTypes.UUID
        },
        teamId: {
            type: DataTypes.UUID
        },
        hasDeal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        // true 是同意 false 是拒绝
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        describeText: {
            type: DataTypes.TEXT,
            defaultValue: ""
        }
    })
};
