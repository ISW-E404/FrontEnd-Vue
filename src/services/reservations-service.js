import http from './http-common';

class ReservationsService {
    getViewUser(id) {
        return http.get(`/reservations/${id}`)
    }
    getViewProvider(id) {
        return http.get(`/reservation/${id}`)
    }

    addReservation(data, accountId) {
        return http.post(`/accounts/${accountId}/reservations/`, data)
    }
}

export default new ReservationsService()
