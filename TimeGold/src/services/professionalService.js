import api from '../services/api';
import { professionalRequest } from "../request/professionalRequest";

export function listProfessionalsRequest(page = 1, size = 12, q = '') {
    return api.get(`/Professional?page=${page}&size=${size}&q=${q}`);
}

export function createProfessionalRequest(data) {
    return api.post('/Professional', data);
}

export function updateProfessionalRequest(data) {
    return api.put('/Professional', data);
}

export function deleteProfessionalRequest(id) {
    return api.delete(`/Professional/${id}`);
}

export function getProfessionalByIdRequest(id) {
    return api.get(`/Professional/${id}`);
}


export async function getProfessionals() {
    const response = await api.get("/Professional");
    return response.data;
}

export async function getProfessionalById(id) {
    const response = await api.get(`/Professional/${id}`);
    return response.data;
}


export function getLoggedUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        throw new Error("Nenhum profissional logado.");
    }
    return user;
}

export async function carregarDadosDoProfissional() {
    const user = getLoggedUser();
    const id = user.id;

    const res = await api.get(`/Professional/${id}`);
    return res.data;
}

export async function salvarPerfil(profile) {
    const body = professionalRequest(profile);
    const response = await api.put(`/Professional`, body);
    return response.data;
}
