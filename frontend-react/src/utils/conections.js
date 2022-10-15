import axios from "axios";

/** NestJS */
export const api = axios.create({ baseURL: "http://localhost:8080" });

/** Laravel */
export const apiTariquia = axios.create({ baseURL: "http://localhost:8000" });
