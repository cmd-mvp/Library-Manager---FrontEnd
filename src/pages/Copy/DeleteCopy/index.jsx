import { useState,useRef, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import style from './DeleteCopy.module.css';
import api from "../../../services/api";

function DeleteCopy(){

    const [successMessage, setSuccessMessage] = useState('');
    const [copy, setCopy] = useState([])
    const id = useRef();

    async function drop() {
        try{
            if(!id.current.value){
                setSuccessMessage("O ID é obrigatório!")
                return;
            }

            await api.delete(`/Copia/${id.current.value}`)
            setSuccessMessage("Copia excluída com sucesso!")

        }catch(error){
            setSuccessMessage("Deu ruim :(" + error)
        }
    }
    
    useEffect(()=>{
        api.delete('/Copia/{id}')
        .then((response)=>{
            setCopy(response.data)
        })
    },[])

    return(
        <>
        <div className={style.delete}>
        <Header/>
            <form className={style.form}>
                <h1 className={style.h1}>Delete Copy</h1>
                <input placeholder="ID" name="id" type="text" ref={id}/>
                <button className={style.button} type="button" onClick={drop}>Submit</button>
            </form>
            <Footer/>
            {successMessage && <div className={style.alert}>{successMessage}</div>}
        </div>
        </>
    );
}

export default DeleteCopy;