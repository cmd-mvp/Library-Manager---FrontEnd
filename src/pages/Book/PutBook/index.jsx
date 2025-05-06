import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import style from './PutBook.module.css'
import api from "../../../services/api";

function PutBook(){

    const [sucessMessage, setSuccessMessage] = useState("")
    const {id} = useParams();

    const inputTitulo = useRef();
    const inputAutor = useRef();
    const inputEditora = useRef(); 

    async function change() {
        try{
            api.put(`/Livro/${id}`,{
                Titulo: inputTitulo.current.value,
                Autor: inputAutor.current.value,
                Editora: inputEditora.current.value
            })
            setSuccessMessage("Livro atualizado")
            
        }catch(error){
            setSuccessMessage("Deu ruim :(" + error)
        }
    }

    return(
            <>
            <div className={style.put}>
                <Header/>
                <form className={style.form}>
                    <h1 className={style.h1}>Put Book
                    <input placeholder="Titulo" name="titulo" type="text" ref={inputTitulo}/>
                    <input placeholder="Autor" name="autor" type="text" ref={inputAutor}/>
                    <input placeholder="Editora" name="editora" type="text" ref={inputEditora}/>
                    <button className={style.button} type="button" onClick={change}>Submit</button>
                    </h1>
                </form>
                {sucessMessage && <div className={style.alert}>{sucessMessage}</div>}
            <Footer/>
            </div>
            </>
    );
}

export default PutBook;