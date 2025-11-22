import api from '../services/api';

export function createProfessionalRequest(data) {
    return api.post('/Professional', data);
}
