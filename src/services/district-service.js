import http from './http-common';

class DistrictService {

    getOfficesByDistric(districtName){
        return http.get(`/districts/name/${districtName}`);
    }


}

export default new DistrictService();
