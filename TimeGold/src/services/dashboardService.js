import api from './api' // se você usa axios configurado

async function getAtendimentosHoje() {
    return api.get('/Dashboard/atendimentos-hoje')
}

async function getUsuariosAtivos() {
    return api.get('/Dashboard/usuarios-ativos')
}

async function getAgendamentosPendentes() {
    return api.get('/Dashboard/agendamentos-pendentes')
}

export default {
    getAtendimentosHoje,
    getUsuariosAtivos,
    getAgendamentosPendentes
}
