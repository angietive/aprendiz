import express from "express";

import {
    getAllficha,
    getFichaById,
    createFicha,
    updateFicha,
    deleteFicha
} from "./ficha.controller.js";

const router = express.Router();

router.get("/listarTodasFichas", getAllficha);
router.get("/listarporid/:id", getFichaById);
router.post("/crear", createFicha);
router.put("/actualizar/:id", updateFicha);
router.delete("/borrar/:id", deleteFicha);

export default router;