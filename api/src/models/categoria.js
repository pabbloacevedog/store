// User
export default (sequelize, DataTypes) => {
    return sequelize.define('categoria', {
        id_categoria:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'categoria'
    })
}
