import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    "mce_celulares",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        logging: false
    }
)

export default sequelize;