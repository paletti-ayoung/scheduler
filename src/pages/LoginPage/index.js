import React, { useState} from 'react'
import '../../css/main.css'
import { login } from '../../controller/loginCtrl';
import '../../css/login.css';


export default function LoginPage() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    }
    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    const handleClick = async () => {
        if (id === '' || pw === '') {
            alert("아이디나 비밀번호를 입력해 주세요.");
            return;
        }
        await login(id,pw)
    }

    
    return (
        <div className="login-container">
            <div className="login-inner">
                <img src='../../img/logo.png' className='login-logo' alt="logo"/>

                <div className="login-title">팔레티 근태관리 로그인</div>
                <div>
                    <div className="login-box">
                        <div>
                            <input
                                type="text"
                                onChange={handleIdChange} value={id}
                                className="login-inp"
                                placeholder="아이디"
                                onKeyPress={async(e)=>{if(e.key==='Enter') await login(id,pw)}}
                            />

                        </div>
                        <div>
                            <input
                                type="password"
                                onChange={handlePwChange} value={pw}
                                className="login-inp"
                                placeholder="비밀번호"
                                onKeyPress={async(e)=>{if(e.key==='Enter') await login(id,pw)}}
                            />
                        </div>
                    </div>
                    <div
                        className="login-btn"
                        onClick={() => { handleClick() }}>
                        로그인하기
            </div>
                </div>
            </div>
        </div>
    )
}

