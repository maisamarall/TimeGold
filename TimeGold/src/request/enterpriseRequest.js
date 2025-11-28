import api from "../services/api";

export async function cadastroEmpresaRequest(empresaDTO) {
    return api.post("/Enterprise", empresaDTO);
}

export async function carregarDadosDaEmpresa() {

    const { data: profissional } = await api.get("/Professional/me");

    const response = await api.get(`/Enterprise/${profissional.enterpriseId}`);
    return response.data;
}

export async function salvarEmpresaPerfil(empresa) {
    return api.put(`/Enterprise/${empresa.id}`, empresa);
}

export function enterpriseRequest(data) {
  return {
    id: data.id,
    name: data.name,
    cnpj: data.cnpj,
    planId: data.planId,
    address: {
            street: data.address.street,
            number: data.address.number,
            city: data.address.city,
            state: data.address.state,
            country: data.address.country
    },
    schedulingTypeIds: data.schedulingTypeIds || [],
    professionalIds: data.professionalIds || []
  };
}