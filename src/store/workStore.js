import { Component } from 'react';
import { observable, action, makeObservable, toJS, } from 'mobx';

class workStore extends Component {
    @observable workList={
           
              "problem": {},
              "basic": {},
            "items": []
    };

    @action
    setWorkList(data,items) {
           
        this.workList ={
            "problem": toJS(data.problem),
            "basic": toJS(data.basic),
            "items": toJS(items)
        }
    }

    constructor() {
        super()
        makeObservable(this, {
            workList: observable,
            setWorkList:action
        })
    }
}
export default new workStore();

