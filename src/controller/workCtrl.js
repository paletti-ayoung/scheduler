import axios from 'axios';
import saveAs from 'file-saver';
import moment from 'moment';

import cookieStore from '../store/cookieStore';
import { SERVER } from '../controller/main';
import workStore from '../store/workStore';
import errorHandler from './errorHandler';

/* eslint no-restricted-globals:0 */


export async function getWork(start,end) {
    try {
        let result = (await axios.get(SERVER + '/work', {
            headers: { Authorization: 'Bearer ' + cookieStore.token },
            params:{start,end}
        })).data;
        if (result.status === 200) {
            console.log('getWork success!');
            console.log(result.data);
            workStore.setWorkList(result.data.summary,result.data.items);
        }
    } catch (e) {
        console.log('getWork error', e.response.data);
        const error = e.response.data
        errorHandler(error);
    }
}

export async function registWork(type,method,basic_item){

    try{
        let result = (await axios.post(SERVER+'/work',{
            date:moment().format('YYYYMMDDHHmmss'),
            type:type,
            method:method,
            basic_item:basic_item,
        },{
            headers: { 
                Authorization: 'Bearer ' + cookieStore.token 
            } 
        })).data

        if(result.status===200){
            console.log('regist Work success!');
            window.location.reload(); 
        }
    }catch(e){
        console.log('registWork error' ,e.response.data);
        const error = e.response.data
        
        if(error.status===400){
            if(error.code===1){
                alert("이미 출근했습니다!")
            }else if(error.code===2){
                alert("출근하지 않았습니다!")
            }
        }else{
            errorHandler(error);
        }

    }
}

export async function fileDownloader(start,end){
    try{
        let result = (await axios.get(SERVER+'/work/excel',{
            responseType: "arraybuffer",
            headers:{
                Authorization:'Bearer ' + cookieStore.token,
                Accept: "application/zip",
            },
            params:{start,end}
        }))
        if(result.status===200){
            console.log('fileDownloader success!');
            saveAs(new Blob([result.data]),"paletti_worksheet.xls");
        }else{
            console.log('fileDownloader error1 ' , result);
        }
    }catch(e){
        console.log('fielDownloader error2' , e);
        const error = e.response.data
        errorHandler(error);
    }
}