import axios from "axios";

export const API_URL = "http://192.168.1.134:8080/cachorro/buscar";

export async function listarCachorros(pagina: number) {
  const response = await fetch(`${API_URL}?page=${pagina}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar cachorros');
  }

  return response.json();
}

