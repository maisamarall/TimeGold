import api from "../services/api";

export function getAllSchedulingTypeRequest(page = 1, size = 12, q = '') {
    return api.get('/SchedulingType', {
        params: { page, size, q }
    });
} 

export function getSchedulingTypeByIdRequest(id) {
    return api.get(`/SchedulingType/${id}`);
}

export function createSchedulingTypeRequest(schedulingTypeData) {
    return api.post('/SchedulingType', schedulingTypeData);
}

export function updateSchedulingTypeRequest(schedulingTypeData) {
    return api.put('/SchedulingType', schedulingTypeData);
}

export function deleteSchedulingTypeRequest(id) {
    return api.delete(`/SchedulingType/${id}`);
}