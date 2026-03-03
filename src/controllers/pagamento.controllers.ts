import { Response, Request } from "express";
import Pagamento from "../models/Pagamento";
import Pedido from "../models/Pedido";

class PagamentoController {

    static async findAll(req:Request, res:Response){
        const pagamentos = await Pagamento.findAll({
            include: [
                {model: Pedido, as : 'pedido'}
            ]
        });

        res.json(pagamentos);
    }

    static async findById(req:Request, res:Response){
        const { id } = req.params;
        const pagamento = await Pagamento.findByPk(Number(id), {
            include: [
                {model: Pedido, as : 'pedido'}
            ]
        });

        res.json(pagamento);
    }

    static async create(req:Request, res:Response){
        const { id_pedido, metodo_pagamento, valor, data_pagamento, status } = req.body;

        const pagamento = await Pagamento.create({
            id_pedido,
            metodo_pagamento,
            valor,
            data_pagamento,
            status
        });

        res.status(201).json(pagamento);
    }
}

export default PagamentoController;