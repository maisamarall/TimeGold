import {
    getAtendimentosHojeRequest,
    getProfissionaisRequest,
    getAgendamentosPendentesRequest
} from '../request/dashboardRequest';

class dashboardService {

    async getWidgetsData(enterpriseId) {
        try {
            const [hoje, pendentes, profissionais] = await Promise.all([
                getAtendimentosHojeRequest(enterpriseId),
                getAgendamentosPendentesRequest(enterpriseId),
                getProfissionaisRequest(enterpriseId)
            ]);

            const ativos = profissionais.data.filter(p => p.status === true).length;

            return {
                success: true,
                hoje: hoje.data,
                pendentes: pendentes.data,
                ativos: ativos
            };

        } catch (error) {
            console.error("Erro ao buscar widgets:", error);
            return {
                success: false,
                message: "Erro ao buscar informações dos agendamentos."
            };
        }
    }
}

export default new dashboardService();