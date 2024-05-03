import styles from './Navbar.module.scss'
import classNames from 'classnames';

function Navbar() {
    const navbarClasses= classNames(styles.navbar)

    return (
        <div className={navbarClasses}>
            This is the navbar...
        </div>
    );
}

export default Navbar