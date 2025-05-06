import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
            <span>Library Manager</span>
            </Link>
            <nav>
            <Link to= "/" > Home </Link>
            <Link to= "/book" > Book </Link>
            <Link to= "/user" > User </Link>
            <Link to= "/rent" > Rent </Link>
            <Link to= "/copy" > Copy </Link>
            </nav>   
        </header>
    )
}

export default Header;