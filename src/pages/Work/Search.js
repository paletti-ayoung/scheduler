import React, { Component } from 'react';
import { getWork } from '../../controller/workCtrl';

export default class Search extends Component{
    
    render(){
        const {start,end,setDate} = this.props
        return(
            <div className="search-layout-inner">
                <div className="search-center">
                    <label>조회기간</label>
                    <input type="text" placeholder="YYYYMMDD" className="search-inp"
                    onChange={(e)=>{setDate(e.target.value,end)}}
                    />
                    <label>~</label>
                    <input type="text" placeholder="YYYYMMDD" className="search-inp"
                    onChange={(e)=>{setDate(start,e.target.value)}}
                    />
                </div>

                <div
                onClick={async()=>{
                    await getWork(start,end)
                }}
                className="search-btn">검색</div>
                
            </div>
        
        )
    }
}