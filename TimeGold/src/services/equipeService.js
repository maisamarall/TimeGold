import {
    listarEquipeRequest,
    buscarEquipePorIdRequest,
    criarEquipeRequest,
    atualizarEquipeRequest,
    deletarEquipeRequest
} from '../request/equipeRequest';

export const equipeService = {

    listar(page = 1, size = 12, q = '') {
        return listarEquipeRequest(page, size, q);
    },

    buscarPorId(id) {
        return buscarEquipePorIdRequest(id);
    },

    criar(data) {
        return criarEquipeRequest(data);
    },

    atualizar(data) {
        return atualizarEquipeRequest(data);
    },

    delete(id) {
        return deletarEquipeRequest(id);
    }
};
