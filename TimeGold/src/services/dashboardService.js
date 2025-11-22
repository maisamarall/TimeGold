    import {
        getAtendimentosHojeRequest,
        getUsuariosAtivosRequest,
        getAgendamentosPendentesRequest
    } from '../request/dashboardRequest';

    export const dashboardService = {

        getAtendimentosHoje() {
            return getAtendimentosHojeRequest();
        },

        getUsuariosAtivos() {
            return getUsuariosAtivosRequest();
        },

        getAgendamentosPendentes() {
            return getAgendamentosPendentesRequest();
        }
    };
