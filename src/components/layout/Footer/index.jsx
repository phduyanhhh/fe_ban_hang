import classNames from "classnames/bind";
import Styles from "./Footer.module.scss";

const cx = classNames.bind(Styles)

const Footer = () => {
    return (
        <div className={cx('footer-layout')}>
            <div className={cx('hr')}></div>
            <div className={cx('box-footer')}>
                <div className={cx('footer')}>
                    <div className={cx('item-footer')}>
                        <div className={cx('header-item-footer')}>GIỚI THIỆU</div>
                        <div className={cx('content-item-footer')}>
                            <p>Về Drake</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Tin tức</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Cửa hàng</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Khuyến mãi</p>
                        </div>
                    </div>
                    <div className={cx('item-footer')}>
                        <div className={cx('header-item-footer')}>THÔNG TIN</div>
                        <div className={cx('content-item-footer')}>
                            <p>Chính sách và quy định chung</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Quy định và hình thức thanh toán</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Chính sách vận chuyển, giao nhận</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Chính sách bảo hành - đổi/trả</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                    <div className={cx('item-footer')}>
                        <div className={cx('header-item-footer')}>HỖ TRỢ</div>
                        <div className={cx('content-item-footer')}>
                            <p>Hỗ trợ trực tuyến</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Đối tác</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Tuyển dụng</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Kiểm tra đơn hàng</p>
                        </div>
                    </div>
                    <div className={cx('item-footer')}>
                        <div className={cx('header-item-footer')}>HỖ TRỢ KHÁCH HÀNG</div>
                        <div className={cx('content-item-footer')}>
                            <p>Hỗ trợ trực tuyến</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Đối tác</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Tuyển dụng</p>
                        </div>
                        <div className={cx('content-item-footer')}>
                            <p>Kiểm tra đơn hàng</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={cx('bottom-footer')}>©DRAKE VN - All Rights Reserved. Thiết kế web bởi Duy Anh</p>
        </div>
    )
}

export default Footer;