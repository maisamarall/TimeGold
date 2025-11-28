import api from '@/services/api';

export function getAtendimentosHojeRequest(enterpriseId) {
    return api.get(`/Scheduling/GetTodaySchedulings/${enterpriseId}`);
}

export function getAgendamentosPendentesRequest(enterpriseId) {
    return api.get(`/Scheduling/GetPendentsSchedulings/${enterpriseId}`);
}

export function getProfissionaisRequest(enterpriseId) {
    return api.get(`/Professional?enterpriseId=${enterpriseId}`);
}
