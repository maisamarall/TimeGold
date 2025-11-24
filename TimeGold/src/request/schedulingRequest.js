import api from "../services/api";

export function getAllSchedulingRequest(page = 1, size = 12, q = '') {
    return api.get('/Scheduling', {
        params: { page, size, q }
    });
} 

export function getSchedulingByIdRequest(id) {
    return api.get(`/Scheduling/${id}`);
}

export function getTodaySchedulingsRequest(enterpriseId) {
    return api.get(`/Scheduling/GetTodaySchedulings/${enterpriseId}`);
}

export function getPendentsSchedulingsRequest(enterpriseId) {
    return api.get(`/Scheduling/GetPendentsSchedulings/${enterpriseId}`);
}

export function getTodaySchedulingsProfessional(professionalId) {
    return api.get(`/Scheduling/GetTodaySchedulingsProfessional/${professionalId}`);
}

export function getTodaySchedulingsStatusProfessionalRequest(professionalId) {
    return api.get(`/Scheduling/GetTodaySchedulingsStatusProfessional/${professionalId}`);
}

export function getSchedulingsByPeriodRequest(professionalId, periodType) {
    return api.get(`/Scheduling/GetSchedulingsByPeriod/${professionalId}`, {
        params: { periodType }
    });
}

export function createSchedulingRequest(schedulingData) {
    return api.post('/Scheduling', schedulingData);
}

export function updateSchedulingRequest(schedulingData) {
    return api.put('/Scheduling', schedulingData);
}

export function deleteSchedulingRequest(id) {
    return api.delete(`/Scheduling/${id}`);
}
