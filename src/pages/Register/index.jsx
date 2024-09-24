import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import axios from "../../util/api.jsx";

const cx = classNames.bind(styles);
const RegisterPage = () => {
    const navigatge = useNavigate();
    // FIRST NAME
    const [firstName, setFirstName] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    //
    const [lastName, setLastName] = useState('');
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    // EMAIL
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const checkErrorEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        console.log(emailError);
    }
    // PHONE NUMBER
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState(true);
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const checkErrorPhoneNumber = () => {
        if(phoneNumber.length >=10) {
            setPhoneNumberError(true)
        } else {
            setPhoneNumberError(false)
        }
    }
    // ADDRESS
    const [address, setAddress] = useState('')
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    // PASSWORD AND RE PASSWORD
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [passwordError, setPasswordError] = useState(true);
    const [rePasswordError, setRePasswordError] = useState(true);

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const checkPassword = () => {
        if(password.length < 5) {
            setPasswordError(false)
        } else {
            setPasswordError(true)
        }
    }
    const handleRePassword = (e) => {
        setRePassword(e.target.value)
    }
    const checkRePassword = () => {
        if(rePassword == password) {
            setRePasswordError(true)
        } else {
            setRePasswordError(false)
        }
    }
    const buttonRegister = async () => {
        const register = await axios.post('/api/v1/register', {
            'email': email,
            'password': password,
            're_password': rePassword,
            'phone_number': phoneNumber,
            'first_name': firstName,
            'last_name': lastName
        })
        if(register) {
            console.log(register);
            navigatge('/home')
        }
        console.log(password);
        console.log(rePassword);
    }
    return(
        <>
            <div className={cx('register')}>
                <div className={cx('content-register')}>
                    <div className={cx('info-register')}>
                        <Link className={cx('item-info-register')} to='/'>Trang chủ</Link>
                        <FontAwesomeIcon className={cx('item-info-register')} icon={faChevronRight} />
                        <Link className={cx('item-info-register')}>Đăng kí</Link>
                    </div> <br></br>
                    <div className={cx('header-register')}>
                        Đăng Kí Tài Khoản
                    </div>
                    <div className={cx('item-header-register')}>
                        Nếu bạn đã đăng ký tài khoản, vui lòng đăng nhập <Link>Tại đây</Link>.
                    </div>
                    <div className={cx('item-header-register')}>
                        Lưu ý: Các mục dấu sao màu đỏ không được bỏ trống & phải điền đầy đủ, chính xác
                    </div>
                    <div className={cx('content-customer')}>
                        Thông tin cá nhân
                    </div>
                    <hr></hr>
                    <div className={cx('form-input')}>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Họ:</div>
                            <input 
                                className={cx('input')} 
                                type="text" 
                                name="lastName" 
                                placeholder="Họ:" 
                                required
                                value={lastName}
                                onChange={handleLastName}
                            />
                        </div>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Tên:</div>
                            <input 
                                className={cx('input')} 
                                type="text" 
                                name="firstName" 
                                placeholder="Tên:"
                                required
                                value={firstName}
                                onChange={handleFirstName}
                            />
                        </div>
                        {
                            emailError ? '' : <span className={cx('error')}>Email không hợp lệ</span>
                        }
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Địa chỉ E-Mail:</div>
                            <input 
                                className={cx('input')} 
                                type="email"
                                name="email" 
                                placeholder="Địa chỉ E-Mail:"
                                required
                                onChange={handleEmail}
                                onKeyDown={checkErrorEmail}
                            />
                        </div>
                        {
                            phoneNumberError ? '' : <span className={cx('error')}>Số điện thoại không hợp lệ</span>
                        }
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Điện thoại:</div>
                            <input 
                                className={cx('input')} 
                                type="text"
                                name="phoneNumber" 
                                placeholder="Điện thoại:"
                                required
                                value={phoneNumber}
                                onChange={handlePhoneNumber}
                                onKeyDown={checkErrorPhoneNumber}
                            />
                        </div>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Địa chỉ:</div>
                            <input 
                                className={cx('input')} 
                                type="text" 
                                name="address" 
                                placeholder="Địa chỉ:"
                                required
                                value={address}
                                onChange={handleAddress}
                            />
                        </div>
                        <div className={cx('content-customer')}>
                            Mật khẩu
                        </div>
                        <hr></hr>
                        {
                            passwordError ? '' : <span className={cx('error')}>Mật khẩu phải từ 6 số</span>
                        }
                        <div className={cx('form-input')}>
                            <div className={cx('item-form-input')}>
                                <div className={cx('info-item-form-input')}>Mật khẩu:</div>
                                <input 
                                    className={cx('input')} 
                                    type="password" 
                                    name="password" 
                                    placeholder="Mật khẩu:"
                                    required
                                    onChange={handlePassword}
                                    onKeyDown={checkPassword}
                                />
                            </div>
                        </div>
                        {
                            rePasswordError ? '' : <span className={cx('error')}>Nhập lại mật khẩu không khớp</span>
                        }
                        <div className={cx('form-input')}>
                            <div className={cx('item-form-input')}>
                                <div className={cx('info-item-form-input')}>Nhập lại mật khẩu:</div>
                                <input 
                                    className={cx('input')} 
                                    type="password" 
                                    name="rePassword" 
                                    placeholder="Nhập lại mật khẩu:"
                                    required
                                    onChange={handleRePassword}
                                    onKeyUp={checkRePassword}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className={cx('button-register')}>
                            <div className={cx('item-button-register')}>
                                <div className={cx('cf')}>
                                    <div className={cx('item-cf')}>Tôi đã đọc & đồng ý với Quy định và hình thức thanh toán</div> 
                                    <input className={cx('checkbox')} name="checkbox" type="checkbox" required/>
                                </div>
                            </div>
                            <div className={cx('item-button-register')}>
                                <button className={cx('button')} onClick={buttonRegister}>Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;