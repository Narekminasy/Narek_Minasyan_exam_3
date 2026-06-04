import {DataTypes,Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Film extends Model {}

Film.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    gender: DataTypes.STRING,
    duration: DataTypes.INTEGER,
},{
    sequelize: db,
    modelName: "films",
    tableName: "films",
    timestamps: true
})

export default Film;