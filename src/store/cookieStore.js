import { Component } from 'react';
import { observable, action, makeObservable, } from 'mobx';
import Cookies from 'mobx-cookie';

class cookieStore extends Component{
    @observable cookie = new Cookies('token');

    @action
    setToken(value){
        this.cookie.set(value)
    }   
    @action
    unsetToken(){
        this.cookie.remove()
    }
    
    get token(){
        return this.cookie.value;
    }
    
    constructor() {
        super()
        makeObservable(this, {
         cookie:observable,
         setToken:action,
         unsetToken:action,
        })
    }
}
export default new cookieStore();

