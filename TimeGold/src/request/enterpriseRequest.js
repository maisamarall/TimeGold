import api from "../services/api";

export async function cadastroEmpresaRequest(empresaDTO) {
    return api.post("/Enterprise", empresaDTO);
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