import axios from "@/utils/axios.customize";
import { Platform } from "react-native";

export const registerAPI = (email: string, password: string, name: string) => {
    const url = `/api/v1/auth/register`;
    return axios.post(url, { email, password, name });
}