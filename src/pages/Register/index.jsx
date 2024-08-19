import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const RegisterPage = () => {
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
                            <input className={cx('input')} type="text" name="last-name" placeholder="Họ:"/>
                        </div>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Tên:</div>
                            <input className={cx('input')} type="text" name="first-name" placeholder="Tên:"/>
                        </div>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Địa chỉ E-Mail:</div>
                            <input className={cx('input')} type="text" name="email" placeholder="Địa chỉ E-Mail:"/>
                        </div>
                        <div className={cx('item-form-input')}>
                            <div className={cx('info-item-form-input')}>Điện thoại:</div>
                            <input className={cx('input')} type="text" name="last-name" placeholder="Điện thoại:"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;