import Key from '@material-ui/icons/VpnKey';
import Log from '@material-ui/icons/Lock';
import Cancel from '@material-ui/icons/Cancel';
import React, {useState, useContext } from 'react'
import Register from '../UserRegisterScreen/UserRegisterScreen';
import { makeStyles } from '@mui/styles';
import UserLoginStyle from './UserLoginStyle.js';
import TextInputGroup from 'components/TextInputGroup/TextInputGroup';
import {Login} from '../../services/auth/auth.service';
import { TokenContext } from '../../routes/Routers';
import { useHistory } from 'react-router';

const useStyles = makeStyles(UserLoginStyle);
function UserLogin(){
	const [register, setRegister] = useState(false);
	const [users, setUsername] = useState('');
	const [pass, setPass] = useState('');
	const [error, setError] = useState({});
	const {setIsSignedIn} = useContext(TokenContext);
	const history = useHistory();
	const  classes = useStyles()
	const handleSubmit = async e => {
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
		const token = await Login(user).then(
			res => {
			window.localStorage.setItem('id', res.id)
			window.localStorage.setItem('token', res.token)
			window.localStorage.setItem('username', res.username)
			setIsSignedIn(true)
			history.push('/')
			}
		).catch(res => {
			console.log(res);
			alert('Đăng nhập không thành công')
		})
		}
		setError('');
	  }
    return(
        <div >
            <form className={classes.form} onSubmit={handleSubmit}>
			<div className={classes.form__heading}>
				<p>Sign up login</p>
			</div>
				<TextInputGroup 
                                    type="text"
                                    name="username"
                                    placeholder="Tài khoản..."
                                    onChange={setUsername}
                                    error={error.username}
                                    label="Tài khoản"
									Icon={<Log/>}
									
                                />
           	<TextInputGroup 
                                    type="password"
                                    name="pass"
                                    placeholder="mật khẩu..."
                                    onChange={setPass}
                                    error={error.pass}
                                    label="Mật khẩu"
									Icon={<Key/>}
                                />
            <div className={classes.form__btn}>
				 <button className={classes.form__btnItem} type="submit" >Đăng Nhập</button> 
			</div>
            </form>
            <div className={classes.register}>
            <button className={classes.register__button} onClick={() => setRegister(true)}>
                Đăng ký
            </button>
            </div>
			{
				register && 
            <label className={classes.overlay} id="modal" name="closeResult" >
				<div className={classes.modalResult}>
				<div className={classes.modalResult__close}>
					<Cancel className={classes.modalResult__closeIcon} onClick = {() => setRegister(false)} />
				</div>
				<div className={classes.modalResult__content}>
					<Register/>
				</div>
                </div>
			</label>
			}
            
        </div>
    )
}
export default UserLogin
