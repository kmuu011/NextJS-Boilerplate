import {LoginDto} from "../type/member";
import {callApi} from "../utils/axios";
import {AxiosResponse} from "axios";

export const loginApi = async (payload: LoginDto): Promise<AxiosResponse | undefined> => {
    return await callApi('post', 'member/login', payload);
}

export const tokenCheck = async (): Promise<AxiosResponse | undefined> => {
    return await callApi('post', 'member/auth');
}