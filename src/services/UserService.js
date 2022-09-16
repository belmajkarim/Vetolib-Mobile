import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
class UserService extends GenericService {
    constructor() {
        super();
    }

    signup = ({ name, email, password, role }) =>
        new Promise((resolve, reject) => {
            this.post("/users/signup", { name, email, password, role })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    login = ({ email, password }) =>
        new Promise((resolve, reject) => {
            this.post("/users/login", { email, password })
                .then((data) => {
                    AsyncStorage.setItem("token", data.token);
                    resolve(data.token);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    logout = () => {
        AsyncStorage.removeItem("token");
    };

    getVeterinarians = () =>
        new Promise((resolve, reject) => {
            this.get("/users/veterinarians")
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    getUsers = () =>
        new Promise((resolve, reject) => {
            this.get("/users")
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    deleteUser = (id) =>
        new Promise((resolve, reject) => {
            this.delete("/users/" + id)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    updateUserStatus = (id, data) =>
        new Promise((resolve, reject) => {
            this.put("/users/" + id, data)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    forgetPassword = ({ email }) =>
        new Promise((resolve, reject) => {
            this.post("/users/forget", { email })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    resetPassword = ({ newPassword, resetPasswordLink }) =>
        new Promise((resolve, reject) => {
            this.put("/users/reset", { newPassword, resetPasswordLink })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    getProfile = () =>
        new Promise((resolve, reject) => {
            this.get("/users/profile")
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    getLoggedInUser = () => {
        try {
            const jwt = AsyncStorage.getItem("token");
            return jwtDecode(jwt);
        } catch (ex) {
            return null;
        }
    };

    isLoggedIn = () => {
        return !!AsyncStorage.getItem("token");
    };
}

let userService = new UserService();
export default userService;
