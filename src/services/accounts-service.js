import http from './http-common';

class AccountService {
    get() {
        return http.get(`/profile`);
    }

    getClientStatus() {
        return http.get(`/profile`);
    }

    update(data) {
        return http.put(`/profile/edit`, data);
    }

    delete(){
        return http.delete(`/profile`);
    }

    getUserData(id){
        return http.get(`/accounts/${id}`);
    }
}

export default new AccountService();
