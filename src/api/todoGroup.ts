import {callApi} from "../utils/axios";
import {AxiosResponse} from "axios";
import {SelectQueryDto} from "../type/common";
import {CreateTodoGroupDto} from "../type/todoGroup";

export const selectTodoGroupApi = async (payload: SelectQueryDto): Promise<AxiosResponse | undefined> => {
    return await callApi<SelectQueryDto>('get', 'todoGroup', payload);
}

export const createTodoGroupApi = async (payload: CreateTodoGroupDto): Promise<AxiosResponse | undefined> => {
    return await callApi<CreateTodoGroupDto>('post', 'todoGroup', payload)
}