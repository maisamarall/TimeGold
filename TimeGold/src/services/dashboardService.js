import {
    getAtendimentosHojeRequest,
    getUsuariosAtivosRequest,
    getAgendamentosPendentesRequest
} from '../request/dashboardRequest';

export const dashboardService = {

    getAtendimentosHoje(enterpriseId) {
        return getAtendimentosHojeRequest(enterpriseId);
    },

    getUsuariosAtivos(professionalId) {
        return getUsuariosAtivosRequest(professionalId);
    },

    getAgendamentosPendentes(enterpriseId) {
        return getAgendamentosPendentesRequest(enterpriseId);
    }
};