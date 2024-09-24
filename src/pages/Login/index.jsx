import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import { useEffect, useState } from "react";
import axios from "../../util/api.jsx";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userAction.jsx";
const cx = classNames.bind(styles);

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();
    // CHECK LOGIN
    const isAuthentication = useSelector((state) => state.user.isAuthentication);
    console.log("is authentication", isAuthentication);
    useEffect(() => {
        if(isAuthentication) {
            toast.warn("Bạn đã đăng nhập rồi")
            navigate('/')
        }
    }, [])
    const dispatch = useDispatch()


    const handleClickContinue = () => {
        navigate('/register')
    }
    // const [err, setErr] = useState('');
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const onClickLogin = async () => {
        try {
            console.log(email, password);
            const response = await axios.post('/api/v1/login', {
                email:email,
                password: password
            })
            console.log(">>>", response);
            const data = {
                first_name: response.data?.data?.first_name,
                last_name: response.data?.data?.last_name,
                access_token: response.data?.access_token
            };
            dispatch(login(data));
            console.log(data);
            toast.success("Đăng nhập thành công")
            navigate('/')    
        } catch (error) {
            console.log(error);
            setEmail('Tai khoan mat khau khong dung');
        }
    }
    return (
        <>
            <div className={cx('login')}>
                <div className={cx('content-login')}>
                    <div className={cx('info-login')}>
                        <Link className={cx('item-info-login')} to='/'>Trang chủ</Link>
                        <FontAwesomeIcon className={cx('item-info-login')} icon={faChevronRight} />
                        <Link className={cx('item-info-login')}>Đăng nhập</Link>
                    </div> <br></br>
                    <div className={cx('infomation')}>
                        <div className={cx('item-infomation')}>
                            <div className={cx('content-item-left')}>
                                <div className={cx('item-header')}>Khách hàng mới</div>
                                <p>Bằng cách tạo tài khoản bạn có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt và đặc biệt là sẽ được hưởng nhiều chương trình ưu đãi!</p>
                                {/* <Link className={cx('button')} to='/register'>Tiếp tục</Link> */}
                                <ButtonComponent cln="button" onClick={handleClickContinue}>Tiếp tục</ButtonComponent>
                            </div>
                        </div>
                        <div className={cx('item-infomation')}>
                            <div className={cx('content-item-right')}>
                                <div className={cx('item-header')}>Đăng nhập</div>
                                <div className={cx('form-input-login')}>
                                    <label className={cx('item-form-input-login')}>
                                        Địa chỉ E-Mail: <br></br>
                                        <input
                                            className={cx('input')} 
                                            placeholder="Địa chỉ E-Mail:"
                                            type="email"
                                            value={email}
                                            onChange={handleEmail}
                                        />
                                    </label>
                                </div>
                                <div className={cx('form-input-login')}>
                                    <label className={cx('item-form-input-login')}>
                                        Mật khẩu: <br></br>
                                        <input
                                            className={cx('input')} 
                                            placeholder="Địa chỉ E-Mail:"
                                            type="password"
                                            value={password}
                                            onChange={handlePassword}
                                        />
                                    </label>
                                    <Link className={cx('forget-password')}>Quên mật khẩu</Link>
                                    <div  className={cx('button-login')}>
                                        <ButtonComponent cln="button" onClick={onClickLogin}>Đăng nhập</ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage