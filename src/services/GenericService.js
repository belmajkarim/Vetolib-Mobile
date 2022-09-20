import axios from "axios";
axios.defaults.baseURL = "http://10.0.2.2:4000/";
import { Storage } from 'expo-storage'
axios.defaults.headers.common["authorization"] = Storage.getItem("token")

class GenericService {
    constructor() { }
    get = (url) =>
        new Promise((resolve, reject) => {
            axios
                .get(url)
                .then((res) => {resolve(res.data);})
                .catch((err) => {
                    reject(err);
                });
        });
    post = (url, data) =>
        new Promise((resolve, reject) => {
            axios
                .post(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    delete = (url) =>
        new Promise((resolve, reject) => {
            axios
                .delete(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    put = (url, data) =>
        new Promise((resolve, reject) => {
            axios
                .put(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
}
export default GenericService;
