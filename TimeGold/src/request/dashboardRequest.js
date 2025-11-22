import api from '@/services/api';

export function getAtendimentosHojeRequest() {
    return api.get('/Dashboard/atendimentos-hoje');
}

export function getUsuariosAtivosRequest() {
    return api.get('/Dashboard/usuarios-ativos');
}

export function getAgendamentosPendentesRequest() {
    return api.get('/Dashboard/agendamentos-pendentes');
}
