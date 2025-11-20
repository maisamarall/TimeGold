import { cadastroEmpresaRequest } from "../request/enterpriseRequest";

class cadastroEnterpriseService {
    async cadastrarEmpresa(empresaDTO) {
        try {
            const response = await cadastroEmpresaRequest(empresaDTO);

            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.errors?.[0] || 'Erro ao cadastrar empresa.'
            };
        }
    }
}

export default new cadastroEnterpriseService();