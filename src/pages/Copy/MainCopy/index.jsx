import Card from '../../../components/Cards/cards';
import Footer from '../../../components/Footer';
import style from './MainCopy.module.css'

function MainCopy(){
    return(
        <>
        <h1 className={style.h1}>Copy Options</h1>
        <div style={{display: 'flex', gap: '300px'}}>
            <Card image= '../../public/images/Copy/GetCopy.png' title='Get Copy' link='/getcopy'/>
            <Card image= '../../public/images/Copy/PostCopy.png' title='Post Copy' link='/postcopy'/>
            <Card image= '../../public/images/Copy/DeleteCopy.png' title='Delete Copy' link='/deletecopy'/>
        </div>
        <Footer/>
        </>
    );
}

export default MainCopy;