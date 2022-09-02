import Axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from 'axios';
import {hostDomain} from '../config';

export const callApi = async <T>(
    method: string, url: string,
    data?: T,
    headers?: AxiosRequestHeaders
): Promise<AxiosResponse | undefined> => {
    const config: AxiosRequestConfig<T> = {
        method,
        url: hostDomain + url,
        data,
        headers: {}
    };

    if (method === 'get' && data) {
        config.url += '?';

        Object.keys(data).forEach((k: string, i: number) => {
            config.url += k + '=' + Object.values(data)[i] +
                ((Object.keys(data).length-1 !== i) ? '&' : '')
        });
    }

    const token = localStorage.getItem('token-code');

    if (token === '') {
        window.location.href = '/';
        localStorage.removeItem('token-code');
        alert('로그인 정보가 존재하지 않습니다. 다시 로그인해주세요.');
        return undefined;
    }

    config.headers = {...config.headers, 'token-code': token || ''};

    if (headers !== undefined) {
        config.headers = {...config.headers, ...headers}
    }

    try {
        const result: AxiosResponse = await Axios(config);
        const newTokenCode = result.headers['new-token-code'];

        if (newTokenCode !== undefined) {
            localStorage.setItem('token-code', newTokenCode);
        }

        return result;
    } catch (e: any) {
        if (e?.response?.status === 401) {
            localStorage.removeItem('token-code');
            window.location.href = '/';
        }
        return e?.response;
    }
};
