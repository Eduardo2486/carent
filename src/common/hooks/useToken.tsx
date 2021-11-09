import React,{useState} from 'react';

export const useToken = () => {
    const [token, setTokenInternal] = useState<string>( (): string => {
        return JSON.parse(localStorage.getItem('token') || '{}')
    });

    const setToken: Function = (newToken: string):void => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    };

    return [token, setToken];
};