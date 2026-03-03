import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Usuario from "./Usuario";
import Endereco from "./Endereco";
import ItemPedido from "./ItemPedido";
import Funcionario from "./Funcionario";

class Pedido extends Model {
  public id_pedido!: number;
  public id_usuario!: number;
  public id_funcionario!: number;
  public data!: Date;
  public valor_total!: number;
  public ativo!: boolean;
  public status!: string;
}

Pedido.init({
    id_pedido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_funcionario: {
      type: DataTypes.INTEGER,
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "CRIADO"
    },
  },
  {
    sequelize,
    tableName: "pedido",
    timestamps: false,
});

Pedido.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    as: "usuario"
});

Pedido.belongsTo(Funcionario, {
    foreignKey: "id_funcionario",
    as: "funcionario"
});

Pedido.hasMany(ItemPedido, {
    foreignKey: "id_pedido",
    as: "itens"
});

export default Pedido;
