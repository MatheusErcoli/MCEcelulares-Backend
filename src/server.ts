import app from "./app";
import sequelize from "./config/database";

const port = 3000;

sequelize.sync({alter:true});

app.listen(port, () => {
    console.log('====================================');
    console.log("Servidor rodando na porta " + port);
    console.log('====================================');
});