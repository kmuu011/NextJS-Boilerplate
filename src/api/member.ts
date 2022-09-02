import {DuplicateCheckDto, LoginDto, SignUpDto} from "../type/member";
import {callApi} from "../utils/axios";
import {AxiosResponse} from "axios";

export const loginApi = async (payload: LoginDto): Promise<AxiosResponse | undefined> => {
    return await callApi<LoginDto>('post', 'member/login', payload);
}

export const signUpApi = async (payload: SignUpDto): Promise<AxiosResponse | undefined> => {
    return await callApi<SignUpDto>('post', 'member/signUp', payload)
}

export const duplicateCheckApi = async (payload: DuplicateCheckDto): Promise<AxiosResponse | undefined> => {
    return await callApi<DuplicateCheckDto>('get', 'member/duplicateCheck', payload)
}

export const tokenCheck = async (): Promise<AxiosResponse | undefined> => {
    return await callApi('post', 'member/auth');
}