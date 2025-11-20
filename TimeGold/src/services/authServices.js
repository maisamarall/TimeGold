import { loginRequest } from "../request/authRequest";

class AuthService {
    async login(email, password) {
        try {
            const response = await loginRequest({email, password});
            const data = response.data;
            const user = {
                id: data.id,
                name: data.name,
                email: data.email,
                type: data.type
            };

            localStorage.setItem('user', JSON.stringify(user));

            return {
                success: true,
                user
            };

        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.errors?.[0] || 'Erro ao realizar login.'
            };
        }
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();