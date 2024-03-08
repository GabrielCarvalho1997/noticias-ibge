import axios from "axios";

export const api = axios.create({
  baseURL: "http://servicodados.ibge.gov.br/api/v3/noticias/",
  headers: {
    "Content-Type": "application/json",
  },
});
