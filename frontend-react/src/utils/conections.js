import axios from "axios";

/** NestJS */
export const api = axios.create({ baseURL: "http://localhost:4000" });

/** Laravel */
export const apiTariquia = axios.create({ baseURL: "http://localhost:8000" });
