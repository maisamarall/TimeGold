import api from "../services/api";
import { enterpriseRequest } from "../request/enterpriseRequest";

export async function createEnterprise(data) {
    const body = enterpriseRequest(data);
    const response = await api.post("/Enterprise", body);
    return response.data
}

export async function getEnterprise() {
    const response = await api.get("/Enterprise");
    return response.data
}

export async function getEnterpriseById(id) {
    const response = await api.get(`/Enterprise/${id}`);
    return response.data
}

export async function updateEnterprise(data) {
    const body = enterpriseRequest(data);
    const response = await api.put(`/api/Enterprise/${data.id}`, body);
    return response.data;
}

export async function deleteEnterprise(id) {
    const response = await api.delete(`/Enterprise/${id}`);
    return response.data;
}

export async function getDadosEmpresa() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        throw new Error("Nenhum profissional logado.");
    }

    return user;
}

export async function carregarDadosDaEmpresa() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const profResponse = await api.get(`/Professional/${user.id}`);
    const enterpriseId = profResponse.data.enterpriseId;

    if (!enterpriseId) {
      throw new Error("Este profissional não possui empresa vinculada.");
    }

    const enterpriseResponse = await api.get(`/Enterprise/${enterpriseId}`);
    return enterpriseResponse.data;

  } catch (error) {
    console.error("Erro ao carregar empresa:", error);
    throw error;
  }
}

export async function salvarEmpresaPerfil(profile) {

    const body = enterpriseRequest(profile);
    const response = await api.put(`/Enterprise`, body);
    return response.data;
}