import style from './MainRent.module.css';
import Card from '../../../components/Cards/cards';
import Footer from '../../../components/Footer';

function MainRent(){
    return(
        <>
        <h1 className={style.h1}>Rental Main</h1>
        <div style={{display: 'flex', gap: '300px'}}>
        <Card image='../../public/images/Rent.png' title='Get Rent' link='/getrent'/>
        <Card image='../../public/images/Rent.png' title='Post Rent' link='/postrent'/>
        <Card image='../../public/images/Rent.png' title='Delete Rent' link='/deleterent'/>
        </div>
        <Footer/>
        </>
    );
}

export default MainRent;