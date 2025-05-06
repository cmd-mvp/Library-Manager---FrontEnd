import style from './Cards.module.css';
import { Link } from 'react-router-dom';

function Card({ image, title, link }) {
    return (
        <div className={style.card}>
            <Link to={link}>
                <img src={image} alt={title} className={style.image}/>
            </Link>
            <h1>{title}</h1>
        </div>
    );
}

export default Card;
