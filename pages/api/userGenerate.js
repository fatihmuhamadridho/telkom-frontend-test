import axios from "axios";

const BASE_URL = "https://randomuser.me/api"

export const AddUserGenerate = async () => {
    const req = await axios.get(BASE_URL);
    return req.data
}