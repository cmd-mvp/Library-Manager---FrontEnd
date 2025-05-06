import { useEffect, useRef, useState } from "react";
import style from './DeleteBook.module.css';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import api from "../../../services/api";

function DeleteBook(){

    const [successMessage, setSuccessMessage] = useState("")
    const [book, setBook] = useState([])
    const id = useRef();

    async function drop() {
        try{
            if(!id.current.value){
                setSuccessMessage("O ID é obrigatório!")
                return;
            }
            await api.delete(`/Livro/${id.current.value}`)

            setSuccessMessage("Livro excluído com sucesso!")

        }catch(error){
            setSuccessMessage("deu ruim :(" +error)
        }
    }

    useEffect(()=>{
        api.delete('/Livro')
        .then((response)=>{
            setBook(response.data)
        })
    },[])

    return(
        <>
        <Header/>
        <div className={style.delete}>
            <form className={style.form}>
            <h1 className={style.h1}> Delete Book
                <input placeholder="ID" name="id" type="text" ref={id}/>
                <button type="button" onClick={drop}>Submit</button>
            </h1>
            </form>
            {successMessage && <div className={style.alert}>{successMessage} </div>}
            <Footer/>
        </div>
        </>
    );
}

export default DeleteBook;