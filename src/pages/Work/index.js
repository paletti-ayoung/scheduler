import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { fileDownloader, getWork, registWork } from '../../controller/workCtrl';
import List from './List';
import workStore from '../../store/workStore';
import '../../css/work.css'
import Current from './Current';
import { observer } from 'mobx-react';
import Search from './Search';


export default @observer class Work extends Component {
    state = {
        start:moment().subtract(1, 'months').format('YYYYMMDD'),
        end: moment().format('YYYYMMDD')
    }
    async componentDidMount() { 
        const {start, end} = this.state;
        await getWork(start, end);//default - 1month
    }

    setDate=(start,end)=>{
        this.setState({
            start,
            end
        })
    }
    
    render() {
        const {start,end} = this.state;
        return (
            <div className="work-container">

                <div className="search-layout">
                    <Search start={start} end={end} setDate={this.setDate}/>
                </div>


                <div className="work-current-layout">
                    <div class="work-current-layout-inner">
                        <label>근태현황</label>
                        <div className="work-regist"
                            onClick={async () => { await fileDownloader(start, end) }}>엑셀저장</div>
                    </div>
                    <Current problem={workStore.workList.problem} basic={workStore.workList.basic} />

                </div>


                <div className="work-top-layout">
                    <div>
                            <label>전체 <span className="total-span">{workStore.workList.items.length}</span> 건</label>
                        <div className="work-top-right">
                                <div className="work-regist"
                                    onClick={async () => { await registWork('출근', 'ERP', 'normal') }}>출근하기</div>
                                <div className="work-regist"
                                    onClick={async () => { await registWork('퇴근', 'ERP') }}>퇴근하기</div>
                        </div>
                    </div>
                </div>

                <div className="table-layout">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>일자</th>
                                <th>요일</th>
                                <th>출근시각</th>
                                <th>퇴근시각</th>
                                <th>근태항목</th>
                                <th>신청내역</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workStore.workList.items && workStore.workList.items.map((data, index) => {
                                return (
                                    <List key={`Work_${index}`} data={data} />
                                )
                            })}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}