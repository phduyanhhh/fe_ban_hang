import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "../../util/api.jsx";

import classNames from "classnames/bind";
import styles from './ProductBrand.module.scss';
const cx = classNames.bind(styles)

const ProductBrand = () => {
    // CHECK LOGIIN


    // DỊNH DẠNG TIỀN
    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    
        return <span>{formattedPrice}</span>;
    }


    const location = useLocation();
    const currentPath = location.pathname; 

    const [brandProduct, setBrandProduct] = useState([]);

    useEffect(() => {
        const fetchBrandProduct = async () => {
            const res = await axios.get(`/api/v1/brand/${currentPath}`);
            console.log(res.data.data);
            setBrandProduct(res.data.data)
        }
        fetchBrandProduct()
    }, [currentPath])
    console.log('>>>>>>>>>', brandProduct);
    return(
        <>
            <div className={cx('all-product')}>
                <div className={cx('products')}>
                    {
                        brandProduct.map((product, index) => {
                            return (
                                <div key={index} className={cx('item-product')}>
                                    <div className={cx('product')}>
                                        <div>
                                            <Link to={currentPath + "/" + product.slug}>
                                                <img className={cx('img-product')} src={product.avatar}/>
                                            </Link>
                                        </div>
                                        <div className={cx('product-name')}>
                                            <Link className={cx('item-product-name')} to={currentPath + "/" + product.slug}>
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className={cx('product-id')}>
                                            # {product._id}
                                        </div>
                                        <div className={cx('product-price')}>
                                            Price: {formatPrice(product.price)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default ProductBrand;