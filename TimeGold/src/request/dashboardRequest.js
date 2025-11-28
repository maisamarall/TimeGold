import api from '@/services/api';

export function getAtendimentosHojeRequest(enterpriseId) {
    return api.get(`/Scheduling/GetTodaySchedulings/${enterpriseId}`);
}

export function getUsuariosAtivosRequest(professionalId) {
    return api.get(`/Scheduling/GetTodaySchedulingsStatusProfessional/${professionalId}`);
}

export function getAgendamentosPendentesRequest(enterpriseId) {
    return api.get(`/Scheduling/GetPendentsSchedulings/${enterpriseId}`);
}
