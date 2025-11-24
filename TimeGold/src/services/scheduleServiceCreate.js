import api from "@/services/api";
import { scheduleRequest } from "../request/schedulingRequest";

export async function createSchedule(data) {
    const body = scheduleRequest(data);
    const response = await api.post("/Scheduling", body);
    return response.data;
}

export async function updateSchedule(data) {
    const body = scheduleRequest(data);
    const response = await api.put("/Scheduling", body);
    return response.data;
}

export async function deleteSchedule(id) {
    const response = await api.delete(`/Scheduling/${id}`);
    return response.data;
}

export async function getTodaySchedulings(id) {
    const response = await api.get(`/Scheduling/GetSchedulingToday/${id}`);
    return response.data;
}

export async function getPendentsSchedulings(id) {
    const response = await api.get(`/Scheduling/GetPendentsSchedulings/${id}`);
    return response.data;
}

export async function getSchedulingStatistics(id) {
    const response = await api.get(`/Scheduling/GetTodaySchedulingsStatusProfessional/${id}`);
    return response.data;
}

export async function getSchedulingsByDate(id, date) {
    const response = await api.get(`/Scheduling/GetSchedulingsByDate/${id}?date=${date}`);
    return response.data;
}
