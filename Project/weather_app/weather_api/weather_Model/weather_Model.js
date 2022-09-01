import { Sequelize } from "sequelize";
import { mapFinderOptions } from "sequelize/types/utils";
import sequelize from "../weather_DB/weather_DB";

export const City = sequelize.define("Cities", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNUll: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNUll: false,
    },


})

// weather [{main, description, icon}]
// main {temp, feels_like, humidity}
// wind {speed, gust}
// rain {1h}
// clouds {all}
//name