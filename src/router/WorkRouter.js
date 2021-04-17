import React, { Component } from "react"
import { Switch } from "react-router-dom"
import { Route } from 'react-router';
import {Work} from '../pages';
import '../css/router.css';
import { logoutHandler } from "../controller/loginCtrl";

export default class WorkRouter extends Component {
  render() {
    return (
      <div className="router-layout">
        
        <div className="router-inner">
         <div className="header-layout">
           <div className="header-title">
           <img src="../../img/logo.png" className="logo"/>
            <label>주식회사 팔레티 근태관리 시스템</label>
           </div>
           
           <div 
           onClick={()=>{logoutHandler()}}
           className="logout-btn">로그아웃</div>
         </div>
          <Switch>
            <Route exact path="/"
              render={(props) =>
                <Work {...props}
                  setVisible={this.setVisible} />
              } />
          </Switch>
        </div>
      </div>
    )
  }
}