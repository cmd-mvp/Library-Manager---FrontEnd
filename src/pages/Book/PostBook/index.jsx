import style from './PostBook.module.css';
import api from '../../../services/api';
import { useRef, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function PostBook (){

    const [successMessage, setSuccessMessage] = useState("")

    const inputTitle = useRef();
    const inputAuthor = useRef();
    const inputPublisher = useRef();

    async function post() {
        try{
            await api.post("/Livro",{
                Titulo: inputTitle.current.value,
                Autor: inputAuthor.current.value,
                Editora: inputPublisher.current.value
            })
            setSuccessMessage("Livro cadastrado com sucesso!")

        }catch(error){
            setSuccessMessage("deu ruim :(" + error)
        }
    }

    return(
        <>
        <Header/>
            <div className={style.container}>
                <form className={style.form}>
                    <h1 className={style.h1}>Post Book
                    <input placeholder='Title' name='title' type='text' ref={inputTitle}/>
                    <input placeholder='Author' name='author' type='text' ref={inputAuthor}/>
                    <input placeholder='Publisher' name='publisher' type='text' ref={inputPublisher}/>
                    <button className={style.button} type='button' onClick={post}>Submit</button>
                    </h1>
                </form>
                {successMessage && <div className={style.alert}>{successMessage}</div>}
            <Footer/>
            </div>
        </>
    );
}

export default PostBook;