import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("weather_db", "root", "|c>Z6VjQbXf", {
    host: "localhost",
    dialect: "mysql"
})