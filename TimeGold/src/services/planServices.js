import { getPlanosRequest } from "../request/planRequest";

class PlanService {
    async listarPlanos() {
        try {
            const response = await getPlanosRequest();
            return {
                success: true,
                planos: response.data
            };
        } catch (error) {
            return {
                success: false,
                message: 'Erro ao buscar planos.'
            };
        }
    }
}

export default new PlanService();