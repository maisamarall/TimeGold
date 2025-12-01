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

export function getTodayListByProfessionalRequest(professionalId) { 
    return api.get(`/Scheduling/GetTodaySchedulingsProfessional/${professionalId}`);
}

export function getTodayStatsByProfessionalRequest(professionalId) {
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

export async function updateSchedulingRequest(payload) {
    console.log("Payload enviado REAL:", payload);
    
    try {
        // Envia para '/Scheduling' sem o ID na URL (ID vai no body)
        const response = await api.put('/Scheduling', JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response || response.status === 204) {
            return null;
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}

export function deleteSchedulingRequest(id) {
    return api.delete(`/Scheduling/${id}`);
}

export function scheduleRequest(data) {
    return {
        id: data.id,
        clientId: data.clientId,
        professionalId: data.professionalId,
        schedulingTypeId: data.schedulingTypeId,
        schedulingTypeName: data.schedulingTypeName, 
        schedulingTypeValue: data.schedulingTypeValue,
        scheduledDate: data.scheduledDate,
        scheduledTime: data.scheduledTime,
        status: data.status,
    }
}