import React,{useEffect, useState} from 'react';
import {useToken} from './useToken';

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken:Function = (token: string):string => {
        const encodedPayload = token.split(".")[1];
        return JSON.parse(atob(encodedPayload));
    };

    const [user, setUser] = useState (() =>{
        if(Object.entries(token).length === 0) return null;
        return getPayloadFromToken(token);
    });
    useEffect(()=>{
        if(Object.entries(token).length === 0){
            setUser(null);
        }else{
            setUser(getPayloadFromToken(token))
        }
    },[])
    return user;
};