import { DataTypes, Model } from 'sequelize';
import db from '../clients/db.sequelize.js';

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    sequelize: db,
    modelName: 'users',
    tableName: 'users',
    timestamps: true,
});

export default Users;