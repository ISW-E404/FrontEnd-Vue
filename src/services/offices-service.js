import http from './http-common';

class OfficesService {

    getAll() {
        return http.get('/account/100/offices');
    }
    get(id) {
        return http.get(`/workspace/${id}`);
    }

    getOfficesByOffiProviderEmail(providerEmail){
        return http.get(`/accounts/email/${providerEmail}/offices`)
    }

    create(data) {
        return http.post("/offices", data);
    }

    update(id, data) {
        return http.put(`/offices/${id}`, data);
    }

    delete(id) {
        return http.delete(`/offices/${id}`);
    }

    deleteAll() {
        return http.delete(`/workspace`);
    }

    findByTitle(title) {
        return http.get(`/workspace?title=${title}`);
    }

    getViewUser(officeId) {
        return http.get(`/offices/${officeId}`);
    }

    getViewProvider(officeId){
        return http.get(`/account/offices/${officeId}`);
    }




}

export default new OfficesService();
