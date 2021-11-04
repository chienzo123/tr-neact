import React, {useState} from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import Person from '@material-ui/icons/Person';
import 'reset-css';
import Info from '@material-ui/icons/Info';
import { makeStyles } from '@mui/styles';
import HeaderStyle from './HeaderStyle.js';
import LogOut from '@material-ui/icons/ExitToApp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { deleteUser } from '../../services/users/user.service'
import { useHistory } from 'react-router';


const useStyles = makeStyles(
    HeaderStyle
);
function Header() {
    
    const classes = useStyles();
    const history = useHistory();
    const name = window.localStorage.getItem('username');
    const [checked, setChecked] = useState(true);
    const DeleteUser = async () => {
        const id = window.localStorage.getItem('id');
        await deleteUser(id).then(res => {
            window.localStorage.removeItem('token', 'username', 'id')
            history.push('/Login')
        }).catch(
            rej => {console.log(rej)}
        )
    }
    return (
        <nav className={classes.header}>
            <Link to="/" className={classes.header__left} >
               <h2 className={classes.header__tag}>Task Management</h2>
            </Link>
          
            <div className={classes.header__right}>
                <h2>Xin chào, {name}</h2>
                <IconButton className={classes.header__rightButton} onClick={() => {
                setChecked(!checked);
                if(checked)
                document.getElementById("info").style.display="block";
                if(!checked)
                document.getElementById("info").style.display="none"
            }}>
                <Person className={classes.header__rightIcon}/>
            </IconButton>
            <div className={classes.info} id="info">
            <Link className={classes.header__link} to="/InfoUser/1"><button className={classes.info__button}>
                <div className={classes.info__buttonIcon}>
                <IconButton>
                < Info/>
             </IconButton>
                </div>
             <strong className={classes.info__buttonText}>Xem thông tin cá nhân</strong>
            </button></Link>
            <Link className={classes.header__link} to="/EditUser/:1"><button className={classes.info__button}>
                <div className={classes.info__buttonIcon}>
                <IconButton>
                <SupervisedUserCircleIcon  />
             </IconButton>
                </div>
             <strong className={classes.info__buttonText}>Chỉnh sửa thông tin</strong>
            </button>
            </Link>
            <button className={classes.info__button} onClick={DeleteUser}>
                <div className={classes.info__buttonIcon}>
                <IconButton>
                <WarningIcon  />
                </IconButton>
                </div>
             <strong className={classes.info__buttonText}>Xóa tài khoản</strong>
            </button>
            <button className={classes.info__button} onClick={() => {
                window.localStorage.removeItem('token')
                history.push('/Login')
                }}  >
                <div className={classes.info__buttonIcon}>
                <IconButton>
                <LogOut  />
                </IconButton>
                </div>
             <strong className={classes.info__buttonText}>Đăng Xuất</strong>
            </button>
            </div>
            </div>
        </nav>
    )
}

export default Header
