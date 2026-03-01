import express, { Request, Response, Router } from "express";
import MarcaController from "./controllers/marca.controllers";

const app = express();
app.use(express.json());

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo!");
});

router.get("/marcas", MarcaController.findAll);
router.post("/marcas", MarcaController.create);
router.get("/marcas/:id", MarcaController.getById);

app.use(router);

export default app;