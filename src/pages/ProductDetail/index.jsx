import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { useEffect, useState } from "react";
import axios from "../../util/api.jsx";
import { useLocation, Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    
        return <span>{formattedPrice}</span>;
    }

    const [product, setProduct] = useState({});
    const [warehouse, setWarehouse] = useState([]);

    const location = useLocation();
    const slipLocation = location.pathname.split('/');
    const slugProduct = slipLocation[slipLocation.length - 1];
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // API PRODUCTION
                const productApi = await axios.get(`/api/v1/product/${slugProduct}`);
                const product = productApi.data.data;
                console.log("Product", product);
                // API WAREHOUSE
                const warehouse = await axios.get(`/api/v1/warehouse/${product._id}`);
                console.log("WARE HOUSE >>>", warehouse.data.data.type);
                const typesWarehouse = warehouse.data.data.type;
                console.log("product >>>", product);
                setProduct(product)
                setWarehouse(typesWarehouse);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct()
    }, [slugProduct])
    const [detailAvatar, setDetailAvatar] = useState('');
    const handleSetDetailAvatar = (imageUrl) => {
        setDetailAvatar(imageUrl)
    }
    
    const [size, setSize] = useState();
    const handleSize = (e) => {
        setSize(e.target.value)
    }
    console.log(size);

    const [quantityTotal, setQuantityTotal] = useState(0);
    useEffect(() => {
        warehouse.forEach(e => {
            if(e.size == size) {
                setQuantityTotal(e.quanlity);
            }
        });
    }, [size]);
    // Click button 
    const [quantitial, setQuantitial] = useState(1);
    const clickMinus = () => {
        console.log("QUANTITY>>>>", quantitial);
        if(quantitial > 1) {
            setQuantitial(quantitial-1);
        } else {
            setQuantitial(1);
        }
    }
    const clickPlus = () => {
        if ( quantityTotal == quantitial) {
            setQuantitial(quantitial);
        } else {
            setQuantitial(quantitial+1);
        }
    }
    return (
        <>
            <div className={cx('content')}>
                <div className={cx('item-content')}>
                    <div className={cx('nav-link')}>
                        <Link className={cx('item-nav-link')} to='/'>Trang chủ</Link>
                        <FontAwesomeIcon className={cx('item-nav-link')} icon={faChevronRight} />
                        <Link className={cx('item-nav-link')}>{slipLocation[1]}</Link>
                        <FontAwesomeIcon className={cx('item-nav-link')} icon={faChevronRight} />
                        <Link className={cx('item-nav-link')}>{ product.name }</Link>
                    </div>
                    <div className={cx('product-content')}>
                        <div className={cx('infomation-product')}>
                            <div className={cx('item-product-left')}>
                                <div>
                                    <img className={cx('image-product')} src={detailAvatar ? detailAvatar : product.avatar} />
                                    <div className={cx('detail-image')}>
                                        {
                                            product.images && product.images.map((image, index) => (
                                                <img className={cx('item-detail-image')} key={index} src={image.url} onClick={() => handleSetDetailAvatar(image.url)}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item-product-right')}>
                                <div>
                                    <p className={cx('product-name')}>{product.name}</p>
                                    <p className={cx('product-id')}>{product._id}</p>
                                    <p className={cx('product-price')}><span className={cx('content-product-price')}>Giá bán: </span>{formatPrice(product.price)}</p>
                                    <p className={cx('free-shipping')}>
                                        MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC KHI ĐẶT HÀNG ONLINE
                                    </p>
                                    <hr></hr>
                                    <p className={cx('product-description')}>
                                        {product.description}
                                    </p>
                                    <hr></hr>
                                    <select className={cx('product-size')} value={size} onChange={handleSize}>
                                        <option className={cx('item-product-size')} value="0">
                                            Vui lòng chọn size
                                        </option>
                                        {
                                            warehouse.map((e, i) => (
                                                <option className={cx('item-product-size')} key={i} value={e.size}>
                                                    {e.size}
                                                </option>
                                            ))    
                                        }
                                    </select>
                                    <div>Số lượng còn lại: {quantityTotal}</div>
                                     <br></br>
                                    <Link href><i>Hướng dẫn chọn size</i></Link>
                                    <div className={cx('box-sale')}>
                                        <div className={cx('quanlity')}>
                                            <p>Số lượng:</p>
                                            <div className={cx('item-quanlity')}>
                                                <button className={cx('button-change-quanlity')} onClick={clickMinus}>
                                                    <FontAwesomeIcon className={cx('item-button-change-quanlity')} icon={faMinus} />
                                                </button>
                                                {quantitial}
                                                <button className={cx('button-change-quanlity')} onClick={clickPlus}>
                                                    <FontAwesomeIcon className={cx('item-button-change-quanlity')} icon={faPlus} />
                                                </button>
                                            </div>
                                            <div>
                                                <Link to="/cart">
                                                    Đặt hàng
                                                </Link>
                                            </div>
                                        </div>
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

export default ProductDetail;