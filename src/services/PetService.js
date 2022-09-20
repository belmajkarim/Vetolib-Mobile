import GenericService from "./GenericService";
class PetService extends GenericService {
    constructor() {
        super();
    }

    addPet = ({ userId, name, specie, sex, color, breed, dob, image }) => new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("userId", userId);
        formData.append("name", name);
        formData.append('specie', specie);
        formData.append("sex", sex);
        formData.append("color", color);
        formData.append("breed", breed);
        formData.append("dob", dob);
        formData.append("image", image);
        this.post("/pets/add", formData).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

    updatePet = (id, { userId, name, specie, sex, color, breed, dob, image }) => new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("userId", userId);
        formData.append("name", name);
        formData.append('specie', specie);
        formData.append("sex", sex);
        formData.append("color", color);
        formData.append("breed", breed);
        formData.append("dob", dob);
        formData.append("image", image);
        this.put("/pets/" + id, formData).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

    deletePet = (id) => new Promise((resolve, reject) => {
        this.put("/pets/delete/" + id).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

    getPets = (userId) => new Promise((resolve, reject) => {
        this.get("/pets/" + userId).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

}




let petService = new PetService();
export default petService;