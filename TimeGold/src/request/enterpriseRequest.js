import api from "../services/api";

export async function cadastroEmpresaRequest(empresaDTO) {
    return api.post("/Enterprise", empresaDTO);
}