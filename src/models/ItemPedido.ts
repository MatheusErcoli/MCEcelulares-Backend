import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Pedido from "./Pedido";
import Produto from "./Produto";

class ItemPedido extends Model {
    public id_item_pedido!: number;
    public id_pedido!: number;
    public id_produto!: number;
    public quantidade!: number;
    public preco_unitario!: number;
}

ItemPedido.init({
    id_item_pedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    tableName: "item_pedido",
    timestamps: false
});

ItemPedido.belongsTo(Pedido, {
    foreignKey: "id_pedido",
    as: "pedido"
});

ItemPedido.belongsTo(Produto, {
    foreignKey: "id_produto",
    as: "produto"
});

export default ItemPedido;
