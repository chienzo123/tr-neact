import React, {useState} from 'react'
import TextInputGroup from 'components/TextInputGroup/TextInputGroup'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';
import UserRegisterScreenStyle from './UserRegisterScreenStyle.js';
import { makeStyles } from '@mui/styles';
import {Register} from '../../services/auth/auth.service'

const useStyles = makeStyles(UserRegisterScreenStyle);
function UserRegister(){
    const  classes = useStyles();
    const [users, setUsername] = useState("");
	const [pass, setPass] = useState("");
    const [error, setError] = useState({});
    
    const handleSubmit = async e => {
        console.log(pass);
		e.preventDefault();
		if(users.length === 0){
			setError({username: 'Tên đăng nhập không được để trống'})
			return;
		}
		if(pass.length === 0){
			setError({pass: 'Mật khẩu không được để trống'})
			return;
		}else{
		const username = users.target.value;
		const password = pass.target.value;
		const user = {username,password}
		const res = await Register(user).then(
			res => {
                alert('Đăng ký thành công')
                
			}
		).catch(res => {
            console.log(res);
			alert('Đăng ký không thành công')
		})
		}
		setError('');
        
	  }
    return(
        <form className={classes.form} onSubmit={handleSubmit} >
            <div className={classes.heading}>
            <h3 >Đăng ký</h3>
            </div>
            <TextInputGroup 
                                    type="text"
                                    name="username"
                                    placeholder="Tài khoản của bạn"
                                    onChange={setUsername}
                                    error={error.username}
                                    label="Tài khoản"
									Icon={<GroupAddIcon/>}
									
                                />
            <TextInputGroup 
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu của bạn"
                                    onChange={setPass}
                                    error={error.pass}
                                    label="Mật khẩu"
									Icon={<CompassCalibrationIcon/>}
									
                                />
            <div className={classes.form__button}>
                <button className={classes.btn} type='submit'>Đăng ký</button>
            </div>
        </form>
    )
}
export default UserRegister