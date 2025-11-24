import {
    getAllSchedulingRequest,
    getSchedulingByIdRequest,
    getTodaySchedulingsRequest,
    getPendentsSchedulingsRequest,
    getTodaySchedulingsProfessional,
    getTodaySchedulingsStatusProfessionalRequest,
    getSchedulingsByPeriodRequest,
    createSchedulingRequest,
    updateSchedulingRequest,
    deleteSchedulingRequest
} from '../request/schedulingRequest';

// Exportando um objeto literal (padrão mais limpo e sem a necessidade de 'new')
export const schedulingService = {

    // LISTAR todos (com paginação)
    async listarAgendamentos(page = 1, size = 12, q = '') {
        try {
            const response = await getAllSchedulingRequest(page, size, q);
            return response.data;
        } catch (error) {
            // Lógica de tratamento de erro mantida: lança List<ErrorMessage> do backend C#
            throw error.response?.data ?? error;
        }
    },

    // GET por ID
    async buscarAgendamentoPorId(id) {
        try {
            const response = await getSchedulingByIdRequest(id);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET Hoje – Empresa
    async listarAgendamentosHoje(enterpriseId) {
        try {
            const response = await getTodaySchedulingsRequest(enterpriseId);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET Pendentes – Empresa
    async listarPendentes(enterpriseId) {
        try {
            const response = await getPendentsSchedulingsRequest(enterpriseId);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET Hoje – Profissional
    async listarHojePorProfissional(professionalId) {
        try {
            const response = await getTodaySchedulingsProfessional(professionalId);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET Status Hoje – Profissional
    async listarStatusHojePorProfissional(professionalId) {
        try {
            const response = await getTodaySchedulingsStatusProfessionalRequest(professionalId);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET por período (DAY, WEEK, MONTH)
    async listarPorPeriodo(professionalId, periodType) {
        try {
            const response = await getSchedulingsByPeriodRequest(professionalId, periodType);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // CREATE
    async criarAgendamento(data) {
        try {
            const response = await createSchedulingRequest(data);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // UPDATE
    async atualizarAgendamento(data) {
        try {
            const response = await updateSchedulingRequest(data);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // DELETE
    async deletarAgendamento(id) {
        try {
            const response = await deleteSchedulingRequest(id);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    }
};

export default schedulingService;