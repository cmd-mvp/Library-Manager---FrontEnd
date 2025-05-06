import {  useRef, useEffect, useState } from "react";
import style from './GetBookId.module.css';
import api from "../../../services/api";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function GetBook(){

    const [sucessMessage, setSucessMessage] = useState('');
    const [book, setBook] = useState([])
    const id = useRef()

    async function search() {
        try{
            if(!id.current.value){
                setSucessMessage("o ID é obrigatório")
                return;
            }
            const response = await api.get(`/Livro/${id.current.value}`)
            const idoutput = JSON.stringify(response.data.id)
            const titulooutput = JSON.stringify(response.data.titulo)
            const autoroutput = JSON.stringify(response.data.autor)
            const editoraoutput = JSON.stringify(response.data.editora)
            setSucessMessage(
                <>
                ID: {idoutput} <br />
                Titulo: {titulooutput} <br />
                Autor: {autoroutput} <br />
                Editora: {editoraoutput} <br />
                </>
            )
        }
        catch(error){
            setSucessMessage("Deu ruim :(" +error)
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
        <div className={style.get}>
            <Header/>
            <form className={style.form}>
                <h1 className={style.h1}>Get Book</h1>
                <input placeholder="Id" name="id" type="text" ref={id}/>
                <button className= {style.button} type="button" onClick={search}>Submit</button> 
            </form>
            <Footer/>
            {sucessMessage && <div className={style.alert}>{sucessMessage} </div>}
        </div>
        </>
    );
}

export default GetBook;