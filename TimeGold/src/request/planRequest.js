import api from "../services/api";

export async function getPlanosRequest() {
    return api.get("/Plan");
}