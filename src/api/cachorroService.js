import axios from "axios";

export const API_URL = "http://192.168.1.156:8080/cachorro/buscar";

export async function listarCachorros(pagina = 0) {
  try {
    const resp = await axios.get(API_URL, {
      params: {
        page: pagina
      }
    });
    return resp.data;
  } catch (err) {
    console.error("Erro ao chamar a API:", err);
    return null;
  }
}

