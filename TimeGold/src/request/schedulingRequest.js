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

export async function updateSchedulingRequest(payload) {
    console.log("Payload enviado REAL:", payload);
    
    const id = payload.id; // Pega o ID do objeto payload
    
    try {
        // Altera a rota para incluir o ID: '/Scheduling/{id}'
        const response = await api.put(`/Scheduling/${id}`, payload); // <--- CORREÇÃO AQUI
        
        // ... (o resto do código permanece o mesmo)
        
        if (!response || response.status === 204) {
            return null;
        }

        return response.data;
    } catch (error) {
        // ...
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
        scheduledDate: data.scheduledDate,
        status: data.status
    };
}
