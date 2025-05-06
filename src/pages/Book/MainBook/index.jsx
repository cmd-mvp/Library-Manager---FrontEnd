import styles from './Book.module.css'
import Footer from '../../../components/Footer';
import Card from '../../../components/Cards/cards';

function Book() {
    return(
    <>
       <h1 className={styles.h1}>Book options</h1>
       <div style={{display: 'flex', gap: '120px'}}>
          <Card image='../../public/images/Book/GetBook Icon.png' title='Get Book' link='/getbookid'/>
          <Card image='../../public/images/Book/PostBook Icon.png' title='Post Book' link='/postbook'/>
          <Card image='../../public/images/Book/PutBook Icon.png' title='Put Book' link='/redirectbook'/>
          <Card image='../../public/images/Book/DeleteBook Icon.png' title='Delete Book' link='/deletebook'/>
       </div>
       <Footer/>
    </>
       );
}

export default Book;