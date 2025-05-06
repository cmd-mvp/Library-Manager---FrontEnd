import style from './user.module.css'
import Card from '../../../components/Cards/cards';
import Footer from '../../../components/Footer';

function CardsList() {
    return (
        <>
        <h1 className={style.h1}>User options</h1>
        <div style={{ display: "flex", gap: "120px" }}>
            <Card image="../../public/images/User/GetUser.png" title="Get User" link="/getuser" />
            <Card image="../../public/images/User/download.png" title="Post User" link="/register" />
            <Card image="../../public/images/User/put user.jpg" title="Put User" link="/redirect" />
            <Card image="../../public/images/User/DeleteUser.png" title="Delete User" link="/deleteuser" />
        </div>
        <Footer/>
        </>
    );
}

export default CardsList;