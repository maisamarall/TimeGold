import api from '../services/api';

export function listProfessionalsRequest(page = 1, size = 12, q = '') {
    return api.get(`/Professional?page=${page}&size=${size}&q=${q}`);
}

export function createProfessionalRequest(data) {
    return api.post('/Professional', data);
}

export function updateProfessionalRequest(data) {
    return api.put('/Professional', data);
}

export function deleteProfessionalRequest(id) {
    return api.delete(`/Professional/${id}`);
}

export function getProfessionalByIdRequest(id) {
    return api.get(`/Professional/${id}`);
}
