import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class ClinicService extends GenericService {
    constructor() {
        super();
    }

    getAllClinics = () => new Promise((resolve, reject) => {
        this.get("/clinics").then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });r

    getSingleClinic = (id) => new Promise((resolve, reject) => {
        this.get("/clinics/" + id).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

    getClinicByVeterinarian = (id) => new Promise((resolve, reject) => {
        this.get("/clinics/by-veterinarian/" + id).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

}




let clinicService = new ClinicService();
export default clinicService;


