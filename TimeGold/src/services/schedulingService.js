import {
    getAllSchedulingRequest,
    getSchedulingByIdRequest,
    getTodaySchedulingsRequest,
    getPendentsSchedulingsRequest,
    // ⚠️ Importando os novos nomes
    getTodayListByProfessionalRequest,
    getTodayStatsByProfessionalRequest,
    getSchedulingsByPeriodRequest,
    createSchedulingRequest,
    updateSchedulingRequest,
    deleteSchedulingRequest
} from '../request/schedulingRequest';

export const schedulingService = {

    // LISTAR todos (com paginação)
    async listarAgendamentos(page = 1, size = 12, q = '') {
        try {
            const response = await getAllSchedulingRequest(page, size, q);
            return response.data;
        } catch (error) {
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

    // GET Hoje – Profissional (Lista)
    async listarHojePorProfissional(professionalId) {
        try {
            const response = await getTodayListByProfessionalRequest(professionalId);
            return response.data;
        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // GET Status Hoje – Profissional (Estatísticas)
    async listarStatusHojePorProfissional(professionalId) {
        try {
            const response = await getTodayStatsByProfessionalRequest(professionalId);
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

            if (response === null) {
                return;
            }

            return response;

        } catch (error) {
            throw error.response?.data ?? error;
        }
    },

    // DELETE
    async deletarAgendamento(id) {
        try {
            const response = await deleteSchedulingRequest(id);
            return response?.data; 
        } catch (error) {
            throw error.response?.data ?? error;
        }
    }
};

export default schedulingService;