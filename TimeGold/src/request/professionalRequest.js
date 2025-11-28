import api from '../services/api';

export function createProfessionalRequest(data) {
    return api.post('/Professional', data);
}

export async function carregarDadosDoProfissional() {
    const response = await api.get("/Professional/me");
    return response.data;
}

export async function salvarPerfil(profissional) {
    return api.put(`/Professional/${profissional.id}`, profissional);
}

export function professionalRequest(data) {
    const request = {
        id: data.id,
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        enterpriseId: data.enterpriseId,
        type: data.type,
        phone: data.phone,
        function: data.function,
        about: data.about,
        actuationTime: data.actuationTime,
        cro: data.cro
    }

    if (data.password && data.password.trim() !== "") {
        request.password = data.password;
    }

    return request;
}