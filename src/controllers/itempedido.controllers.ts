import { Request, Response } from "express";
import Pedido from "../models/Pedido";
import Produto from "../models/Produto";
import ItemPedido from "../models/ItemPedido";

class ItemPedidoController {

    static async findAll(req: Request, res: Response){
        const itensPedido = await ItemPedido.findAll({
            include: [
                {model: Pedido, as : 'pedido'},
                {model: Produto, as : 'produto'}
            ]
        });

        res.json(itensPedido);
    }

    static async findById(req: Request, res: Response){
        const { id } = req.params;
        const itemPedido = await ItemPedido.findByPk(Number(id), {
            include: [
                {model: Pedido, as : 'pedido'},
                {model: Produto, as : 'produto'}
            ]
        });

        res.json(itemPedido);
    }

    static async create(req: Request, res: Response){
        const { id_pedido, id_produto, quantidade, preco_unitario } = req.body;

        const itemPedido = await ItemPedido.create({
            id_pedido,
            id_produto,
            quantidade,
            preco_unitario
        });

        res.status(201).json(itemPedido);
    }
}

export default ItemPedidoController;