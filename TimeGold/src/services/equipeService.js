import api from './api'

export default {

    listar(page = 1, size = 12, q = '') {
        return api.get('/Professional', {
            params: { page, size, q }
        })
    },

    buscarPorId(id) {
        return api.get(`/Professional/${id}`)
    },

    criar(data) {
        return api.post('/Professional', data)
    },

    atualizar(data) {
        return api.put(`/Professional/${data.id}`, data)
    },


  deletar(id) {
        return api.delete(`/Professional/${id}`)
    }
}
