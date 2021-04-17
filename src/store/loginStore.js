import { Component } from 'react';
import { observable, action, makeObservable } from 'mobx';

class loginStore extends Component {
    @observable MY={
        "department": "department",
        "work_rank": "work_rank",
        "name": "name",
        "auth": 0
    }

  
    @action
    setMyInfo(data) {
        this.MY={
            department: data.department,
            work_rank: data.work_rank,
            name: data.name,
            auth: data.auth
        }
    
    }

    constructor() {
        super()
        makeObservable(this, {
            MY: observable,
          setMyInfo:action
        })
    }
}
export default new loginStore();

