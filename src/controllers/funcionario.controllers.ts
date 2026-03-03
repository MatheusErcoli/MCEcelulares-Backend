import { Request, Response } from "express";
import Funcionario from "../models/Funcionario";

class FuncionarioController {
    
    static async findAll(req: Request, res: Response){

        const funcionarios = await Funcionario.findAll();

        res.json(funcionarios);
    }

    static async findById(req: Request, res: Response){
        const { id } = req.params;
        const funcionario = await Funcionario.findByPk(Number(id));

        res.json(funcionario);
    }

    static async create(req: Request, res: Response){
        const { id_pedido, nome, email, telefone, cargo, data_admissao, salario, ativo } = req.body;
        const funcionario = await Funcionario.create({
            id_pedido,
            nome,
            email,
            telefone,
            cargo,
            data_admissao,
            salario,
            ativo
        });

        res.status(201).json(funcionario);
    }
}

export default FuncionarioController;