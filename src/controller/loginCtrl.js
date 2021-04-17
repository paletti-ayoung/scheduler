import axios from 'axios'
import { SERVER } from './main';
import cookieStore from '../store/cookieStore';
import LoginCrypt from './LoginCrypt'
import errorHandler from '../controller/errorHandler';
import loginStore from '../store/loginStore';
/* eslint no-restricted-globals:0 */


export async function tokenLogin(){
    if(cookieStore.token==null) return;
    try{
        let result = (await axios.get(SERVER+'/user',{
            headers:{Authorization : 'Bearer ' + cookieStore.token}
        })).data
      
        if(result.status===200){
            console.log('checkLogin success!')
            cookieStore.setToken(result.data.access_token);
            await userMe();
        }else{
            console.log('checkLogin error ' , result.status)
        }
    }catch(e){
        console.log('checkToken error ' ,e)
        //   errorThrow(e.response);
        const error = e.response.data
        errorHandler(error);

    }
}

export async function login(id,pw){
    const loginCrypt = LoginCrypt(SERVER);
    const loginData = await loginCrypt.makeLogin(id,pw);
    try{
        let result = (await axios.post(SERVER+'/user',{
            loginData
        })).data
        if(result.status===200){
            console.log('login success!',result.data)
            cookieStore.setToken(result.data.access_token);
            await userMe();
        }else{
            console.log('login error ' , result.status)
        }
    }catch(e){
        // window.alert("로그인 실패");
        console.log('login error ' , e.response.data)
        const error = e.response.data
        if(error.status===400){
            if(error.code===1){
                alert("없는 ID나 잘못된 PW 입니다.")
                return;
            }else{
                errorHandler(error);
            }
        }
    }
}

export async function logoutHandler(){
   if( window.confirm("로그아웃 하시겠습니까")){
    cookieStore.unsetToken()
   }
}

async function userMe(){
    try{    
        let result=(await axios.get(SERVER+'/user/me',{
            headers:{Authorization : 'Bearer ' + cookieStore.token }
        })).data;

        if(result.status===200){
            console.log('userMe success!');
            loginStore.setMyInfo(result.data);
        }

    }catch(e){
        console.log('userMe error' , e.response.data);
        const error = e.response.data
        errorHandler(error);
    }
}