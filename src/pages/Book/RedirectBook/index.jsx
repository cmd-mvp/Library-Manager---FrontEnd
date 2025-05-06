import { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header";
import style from './RedirectBook.module.css';
import Footer from "../../../components/Footer";
import api from "../../../services/api";
import {Link } from "react-router-dom";

function PutBook(){

    const [successMessage, setSucessMessage] = useState('')
    const [book, setBook] = useState([])
    const id = useRef()

    async function search() {
        try{
            if(!id.current.value){
                setSucessMessage("O ID é obrigatório!")
                return;
            }

        const response = await api.get(`/Livro/${id.current.value}`);
        if(!response.data){
            setSucessMessage("Livro não encontrado")
            return;
        }

        /*setSucessMessage(
            <ul>
                <li key={response.data.id}>
                    <Link className={style.link} to={`/putbook/${response.data.id}`}>
                    Editar
                    </Link>
                </li>
            </ul>
        )*/

            setSucessMessage(
                <>
                <li key={response.data.id}>
                    <Link className={style.link} to={`/putbook/${response.data.id}`}>
                    Editar
                    </Link>
                </li>
                </>
            )
        
        }catch(error){
            setSucessMessage("deu ruim :(" + error)
        }
    }

    useEffect(() =>{
        api.get('/Livro')
        .then((response) =>{
            setBook(response.data)
        })
    },[])

    return(
        <>
        <Header/>
        <div className={style.put}>
            <form className={style.form}>
                <h1 className={style.h1}>Redirect</h1>
                    <input placeholder="ID" name="id" type="text" ref={id}/>
                    <button className={style.button} type="button" onClick={search}>Submit</button>
            </form>
            {successMessage && <div className={style.alert}>{successMessage} </div>}
            <Footer/>
        </div>
        </>
    );
}

export default PutBook;