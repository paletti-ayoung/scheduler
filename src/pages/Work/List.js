import React, { Component } from 'react';
import moment from 'moment';


const BASIC={
    normal:'정상',
    late:'지각',
    leave:'조퇴',
    werid:'근태이상',
    etc:'기타'
};

export default class List extends Component{
        
    render(){
        const {data} = this.props;

        return(
            <tr className="reqlist-tr-btn">
                <td className="work-td">
                {/* 일자 */}
                <div>{moment(data.startAt).format('YYYY-MM-DD HH:mm')}</div>
                </td>
                <td className="work-td">
                 {/* 요일 */}
                <div>{moment(data.startAt).format('dddd')}</div>
                </td>
                <td className="work-td">
                 {/* 출근시각 */}
                 <div>{moment(data.startAt).format('YYYY-MM-DD HH:mm')}</div>
                </td>
                <td className="work-td">
                <div>{moment(data.endAt).format('YYYY-MM-DD HH:mm')}</div>
                </td>
                <td className="work-td">
                <div>{BASIC[data.basic_item]}</div>
                </td>
                <td className="work-td">
                <div>{data.etc}</div>
                </td>
               
            </tr>
        
        )
    }
}
