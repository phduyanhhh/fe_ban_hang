import classNames from "classnames/bind";
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLock, faUser, faHeart, faCartPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../drake_logo.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../util/api.jsx";

const cx = classNames.bind(styles);

const Header = () => {

    // INFOMATION
    const infomations = ['Email hỗ trợ: support@drake.vn', 'Hotline: 1800.1068', 'Miễn phí vận chuyển'];
    const [infomation, setInformation] = useState(0);

    setTimeout(() => {
        if(infomation<2) {
            setInformation(infomation+1);
        } else{
            setInformation(0)
        }
    }, 3000)
    const handleRight = () => {
        if(infomation<2) {
            setInformation(infomation+1);
        } else{
            setInformation(0)
        }
    }
    const handleLeft = () => {
        if(infomation==0) {
            setInformation(2);
        } else{
            setInformation(infomation-1)
        }
    }

// USE EFFECT MENU
    const [menu, setMenu] = useState([]);


    useEffect(() => {
        const fetchMenu = async () => {
            const res = await axios.get('/api/v1/brand/all');
            setMenu(res.data.data)
        }
        fetchMenu()
    }, []) 

    return (
        <>
            <div className={cx('header')}>
                <div className={cx('header-info')}>
                    <Link to='' className={cx('item-header-info')}>Hotline: 1800.1068</Link>
                    <Link to='' className={cx('item-header-info')}><FontAwesomeIcon icon={faHouse} /> Cửa hàng</Link>
                    <Link to='/register' className={cx('item-header-info')}><FontAwesomeIcon icon={faLock} /> Đăng kí</Link>
                    <Link to='' className={cx('item-header-info')}><FontAwesomeIcon icon={faUser} /> Đăng nhập</Link>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('logo')}>
                    <img src={Logo} />
                </div>
                <div className={cx('cart')}>
                    <div className={cx('item-cart')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className={cx('item-cart')}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={cx('infomation')}>
                <div className={cx('nav-information')}>
                    <div className={cx('item-infomation')}><FontAwesomeIcon onClick={handleLeft} icon={faChevronLeft} /></div>
                    <div className={cx('item-infomation')}>{infomations[infomation]}</div>
                    <div className={cx('item-infomation')}><FontAwesomeIcon onClick={handleRight} icon={faChevronRight} /></div>
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('nav-menu')}>
                    {
                        menu.map((element, index) => {
                            return (
                                <div key={index} className={cx('item-menu')}>
                                    <Link className={cx('link-item-menu')} to={`/${element.slug}`}> {element.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
 
export default Header;