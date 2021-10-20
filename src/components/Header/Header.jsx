import React, {useState} from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import Person from '@material-ui/icons/Person';
import Info from '@material-ui/icons/Info';
import LogOut from '@material-ui/icons/ExitToApp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { IconButton } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './header.css';


function Header({setToken}) {
    const [checked, setChecked] = useState(true);
    return (
        <nav className="header">
            <Link className="header__left" to="/">
               <h2 className='header__tag'>Task Management</h2>
            </Link>
            <div className="header__right">
                <IconButton className='header__right-button' onClick={() => {
                setChecked(!checked);
                if(checked)
                document.getElementById("info").style.display="block";
                if(!checked)
                document.getElementById("info").style.display="none"
            }}>
                <Person className='header__right-icon'/>
            </IconButton>
            <div className="info" id="info">
            <Link className="header__link" to="/InfoUser/1"><button className="info__button">
                <div className="info__button-icon">
                <IconButton>
                < Info/>
             </IconButton>
                </div>
             <strong className="info__button-text">Xem thông tin cá nhân</strong>
            </button></Link>
            <Link className="header__link" to="/EditUser/:1"><button className="info__button">
                <div className="info__button-icon">
                <IconButton>
                <SupervisedUserCircleIcon  />
             </IconButton>
                </div>
             <strong className="info__button-text">Chỉnh sửa thông tin</strong>
            </button>
            </Link>
            <button className="info__button">
                <div className="info__button-icon">
                <IconButton>
                <WarningIcon  />
                </IconButton>
                </div>
             <strong className="info__button-text">Xóa tài khoản</strong>
            </button>
            <button className="info__button" onClick={() => setToken(false)}>
                <div className="info__button-icon">
                <IconButton>
                <LogOut  />
                </IconButton>
                </div>
             <strong className="info__button-text">Đăng Xuất</strong>
            </button>
            </div>
            </div>
        </nav>
    )
}

export default Header
