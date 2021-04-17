import path from 'path';
import { publicEncrypt } from './init';

export default function(serverURL){
    // server url은 http://xxx.xxx.xxx/api 까지 넣으면 됨.
    let SERVER_URL = path.join(serverURL,'user/public').replace('http:/', 'http://');

    // id, pw
    const makeLogin = async (id, pw)=>{
        return await publicEncrypt(SERVER_URL, JSON.stringify({id,pw}));
    }

    // pw 필요
    const makeShare = async (pw)=>{
        return await publicEncrypt(SERVER_URL, pw);
    }

    // pw, email
    // 단 email은 필요한 상황에만 넣어야함.
    // 필요없는 상황일때는 undefined
    const makeReq = async (pw, email)=>{
        return await publicEncrypt(SERVER_URL, JSON.stringify({pw, email}));
    }
    return {
        makeLogin,
        makeShare,
        makeReq
    }
};