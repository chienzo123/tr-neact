import './UserLogin.css';
import Key from '@material-ui/icons/VpnKey';
import Log from '@material-ui/icons/Lock';
import Cancel from '@material-ui/icons/Cancel';
import React, {useState} from 'react'
import Register from '../UserRegister/UserRegister';


function UserLogin({setToken}){
	const [register, setRegister] = useState(false);
	
    return(
        <div >
            <form className="form" onSubmit={() => setToken(true)}>
			<div className="form__heading">
				<p>Sign up login</p>
			</div>
            <div className="input-item ">
				<label className="input-item__heading" >Email</label>
				<div className="input-item__input " >
                <Log/>
					<input className="input-item__input-input" id="nameInput" type="text"/>
				</div>
            </div>
            <div className="input-item ">
				<label className="input-item__heading" >Password</label>
				<div className="input-item__input " >
                <Key/>
					<input className="input-item__input-input" id="nameInput" type="password"/>
				</div>
            </div>
            <div className="form__btn">
				 <button className="form__btn-item form__btn--enb" type="submit" >Đăng Nhập</button> 
			</div>
            </form>
            <div className="register">
            <button className="register__button" onClick={() => setRegister(true)}>
                Đăng ký
            </button>
            </div>
			{
				register && 
            <label className="overlay" id="modal" name="closeResult" onClick={() => setRegister(false)}>
				<div className="modal-result">
				<div className="modal-result__close">
					<Cancel className="modal-result__close-icon" onClick = {() => setRegister(false)} />
				</div>
				<div className="modal-result__content">
					<Register/>
				</div>
                </div>
			</label>
			}
            
        </div>
    )
}
export default UserLogin