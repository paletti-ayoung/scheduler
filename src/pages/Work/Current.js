import { observer } from 'mobx-react';
import React, { Component } from 'react';
import loginStore from '../../store/loginStore';

export default @observer class Current extends Component{
    render(){
        const {problem,basic} = this.props;
        const MY = loginStore.MY;
        return(
            <div>
               <table border="1">
                    <thead>
                        <tr>
                            <th rowSpan="2">부서</th>
                            <th rowSpan="2">직급</th>
                            <th rowSpan="2">이름</th>
                            {/* <th rowSpan="2">기초계</th>
                            <th rowSpan="2">사고계</th> */}
                            <th colSpan="7">사고내역</th>
                            <th colSpan="6">기초항목</th>
                        </tr>
                    
                        <tr>
                           <th>휴가</th>
                           <th>출장</th>
                           <th>외근</th>
                           <th>교육</th>
                           <th>기타</th>
                           <th>결근</th>
                           <th>계</th>

                           <th>정상</th>
                           <th>지각</th>
                           <th>조퇴</th>
                           <th>근태이상</th>
                           <th>기타</th>
                           <th>계</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                           <td>{MY.department}</td>
                           <td>{MY.work_rank}</td>
                           <td>{MY.name}</td>
                           {/* <td>{basic.total}</td>
                           <td>{problem.total}</td> */}
                          

                           <td>{problem.vacation}</td>
                           <td>{problem.business}</td>
                           <td>{problem.outside}</td>
                           <td>{problem.education}</td>
                           <td>{problem.etc}</td>
                           <td>{problem.truancy}</td>
                           <td>{problem.total}</td>

                           <td>{basic.normal}</td>
                           <td>{basic.late}</td>
                           <td>{basic.leave}</td>
                           <td>{basic.weird}</td>
                           <td>{basic.etc}</td>
                           <td>{basic.total}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}