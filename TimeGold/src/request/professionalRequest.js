import api from '../services/api';

export function createProfessionalRequest(data) {
    return api.post('/Professional', data);
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