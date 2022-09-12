import { Sequelize } from "sequelize";
const password = "|c>Z6VjQbXf"

export const sequelize = new Sequelize("weather_db", "root", password, {
    host: "localhost",
    dialect: "mysql"
})