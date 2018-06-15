// User
export default (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id_user:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        id_tipo_perfil: {
            type: DataTypes.STRING
        },
        foto_perfil: {
            type: DataTypes.STRING
        },
        verificado: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user'
    })
}