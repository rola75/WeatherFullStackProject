import { Sequelize } from "sequelize";
import { sequelize } from "../weather_DB/weather_DB.js";

export const City = sequelize.define("Cities", {
    id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNUll: false,
    },

    icon: {
        type: Sequelize.STRING,
        allowNUll: false,
    },
    
    description: {
        type: Sequelize.STRING,
        allowNUll: false,
    },

    temp: {
        type: Sequelize.INTEGER,
        allowNUll: false,
    },

    feels_like: {
        type: Sequelize.INTEGER,
        allowNUll: false,
    },
}, {timestamps:false});
    