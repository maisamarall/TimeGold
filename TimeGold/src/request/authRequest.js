import api from "../services/api";

export async function loginRequest(credenciais) {
    return api.post("/Login", credenciais);
}