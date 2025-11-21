import api from './api';

export default {
    createProfessional(data) {
        return api.post('/Professional', data);
    }
}
