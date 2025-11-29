import api from '../services/api';

export function listarEquipeRequest(page = 1, size = 12, q = '') {
    return api.get('/Professional', {
        params: { page, size, q }
    });
}

export function buscarEquipePorIdRequest(id) {
    return api.get(`/Professional/${id}`);
}

export function criarEquipeRequest(data) {
    return api.post('/Professional', data);
}

export function atualizarEquipeRequest(data) {
    return api.put("/Professional", data);
}

// export function atualizarEquipeRequest(data) {
//     return api.put(`/Professional/${data.id}`, data);
// }

export function deletarEquipeRequest(id) {
    return api.delete(`/Professional/${id}`);
}
