import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

const ButtonComponent = ({cln, onClick, children}) => {
    return (
        <button
            className={cx(cln)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonComponent