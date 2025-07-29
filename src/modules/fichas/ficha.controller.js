import {
    getfichasDB,
    getfichasporIdDB,
    createfichasDB,
    updatefichasDB,
    deleteFichasDB
} from "./ficha.model.js";

export async function getAllficha(res, req) {
    try {
        const fichas = await getfichasDB();
        res.status(200).send({
            status: "ok",
            data: fichas,
        });
    
    } catch (error) {
        res.status(500).send({
            status: "error",
            Message: error.code + "=>" + error.Message,
        }
        );
    }
}

export async function getFichaById(id) {
  try {
    const fichas = await getfichasporIdDB(id);
    if (!fichas) {
      throw {
        status: "error",
        message: "Ficha no encontrado.",
        statusCode: 404,
      };
    }
    res.status(200).send({
      status: "ok",
      data: fichas,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + "=>" + error.message,
    });
  }
}

export async function createFicha(req, res) {
  try {
    let data = req.body;
    // Aquí debes añadir validaciones de entrada de datos --- passport-u otra libreria  !!!!!

    const result = await createfichasDB(data);
    res.status(200).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + "=>" + error.message,
    });
  }
}

export async function updateFicha(id, data) {
  try {
    const result = await updatefichasDB(id, data);
    if (result.affectedRows === 0) {
      throw {
        status: "error",
        message: "Ficha no encontrado o no hubo cambios para actualizar.",
        statusCode: 404,
      };
    }
    res.status(200).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + "=>" + error.message,
    });
  }
}

export async function deleteFicha(id) {
  try {
    const result = await deleteFichasDB(id);
    if (result.affectedRows === 0) {
      throw {
        status: "error",
        message: "Ficha no encontrado para eliminar.",
        statusCode: 404,
      };
    }
    res.status(200).send({
      status: "ok",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.code + "=>" + error.message,
    });
  }
}