import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Funcionario extends Model {
    public id_funcionario!: number;
    public id_pedido!: number | null;
    public nome!: string;
    public email!: string
    public telefone!: string;
    public cargo!: string;
    public data_admissao!: Date;
    public salario!: number;
    public ativo!: boolean;
}

Funcionario.init({
    id_funcionario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.STRING,
    },
    data_admissao: {
        type: DataTypes.DATE,
    },
    salario: {
        type: DataTypes.DECIMAL(10, 2),
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    tableName: "funcionario",
    timestamps: false
});


export default Funcionario;
