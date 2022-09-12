import axios from "axios";

export async function createUser(name, email, password){
    await axios.post(
      'http://localhost:4000/users/signup',{
            name: name,
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}
