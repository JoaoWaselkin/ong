import axios from "axios";

const API_URL = "http://127.0.0.1:8080/cachorro/buscar";

export async function listarCachorros() {
  try {
    const resp = await axios.get(API_URL);
    return resp.data.content;
  } catch (err) {
    console.error("Erro ao chamar a API:", err);
    return [];
  }
}

  
  // try {
  //   const response = await fetch(API_URL, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Erro HTTP: ${response.status}`);
  //   }

  //   const text = await response.text();
  //   const dados = text ? JSON.parse(text) : [];

  //   console.log("Dados recebidos:", dados);
  //   return Array.isArray(dados) ? dados : [dados];
  // } catch (error) {
  //   console.error("Erro detalhado:", error);
  //   throw error;
  // }


