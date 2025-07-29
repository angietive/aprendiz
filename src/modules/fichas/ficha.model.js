import dbconn from "../../config/dbconexion.js";

export async function getfichasDB() {
  const [rows] = await dbconn.query("SELECT * FROM ficha");
  return rows;
}

export async function getfichasporIdDB(id) {
  const [rows] = await dbconn.query("SELECT * FROM ficha WHERE id = ?", [id]);
  return rows[0]; // Retorna el primer resultado o undefined si no se encuentra
}

export async function createfichasDB(fichaData) {
  const [result] = await dbconn.query("INSERT INTO ficha SET ?", [
    fichaData,
  ]);
  return result;
}

export async function updatefichasDB(id, fichaData) {
  const [result] = await dbconn.query("UPDATE ficha SET ? WHERE id = ?", [
    fichaData,
    id,
  ]);
  return result;
}

export async function deleteFichasDB(id) {
  const [result] = await dbconn.query("DELETE FROM ficha WHERE id = ?", [
    id,
  ]);
  return result;
}
