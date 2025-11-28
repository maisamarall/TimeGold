import { loginRequest } from "../request/authRequest";

class AuthService {
    async login(email, password) {
        try {
            const response = await loginRequest({email, password});
            const data = response.data;

            const userData = data.professional;
            const token = data.token;

            const user = {
                id: userData.id,
                name: userData.name,
                email: userData.email,
                type: userData.type,
                enterpriseId: userData.enterpriseId
            };

            
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.errors?.[0] || 'Erro ao realizar login. Email ou senha inválidos.'
            };
        }
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}

export default new AuthService();