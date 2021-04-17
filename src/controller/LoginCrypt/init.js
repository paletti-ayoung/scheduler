import axios from 'axios';
import crypto from 'crypto';

async function getPublicKey(SERVER_URL){
    let result;
    try{
        result = (await axios.get(SERVER_URL)).data;
        
        if(result){
            const status = result.status;
            if(status === 200){
                return result.data.publicKey
            }
        }
        throw "PUBLIC KEY load fail";
    }catch(e){
        throw e;
    }
}
export async function publicEncrypt(SERVER_URL, text){
  const key = await getPublicKey(SERVER_URL);
  
  return crypto.publicEncrypt({
    key,
  }, Buffer.from(text, 'utf8')).toString('base64');
}