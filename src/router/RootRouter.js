import { observer } from 'mobx-react';
import React, { Component} from 'react'
import { BrowserRouter } from "react-router-dom"
import Login from "../pages/LoginPage";
import WorkRouter from './WorkRouter';
import cookieStore from '../store/cookieStore';
import {tokenLogin} from '../controller/loginCtrl';

export default @observer class RootRouter extends Component {//token check

  async componentDidMount(){
    await tokenLogin()
  }

  render() {
    const token = cookieStore.token
    if (token) {
      return (
        <BrowserRouter>
          <WorkRouter />
        </BrowserRouter>
      )
    }
    return (
      <Login />
    )
   
  }

}
