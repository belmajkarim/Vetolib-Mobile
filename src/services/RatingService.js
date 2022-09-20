import GenericService from "./GenericService";
class RatingService extends GenericService {
    constructor() {
        super();
    }

    postReview = ({ number, clinicId, userId, comment }) => new Promise((resolve, reject) => {
        this.post("/ratings/add", { number, clinicId, userId, comment }).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

    getReviewsByClinic = (clinicId) => new Promise((resolve, reject) => {
        this.get("/ratings/" + clinicId).then((data) => { resolve(data); })
            .catch((err) => { reject(err); })
    });

}




let ratingService = new RatingService();
export default ratingService;