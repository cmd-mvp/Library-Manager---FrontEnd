import { useState, useRef, useEffect } from "react";
import Header from "../../../components/Header";
import style from './DeleteRent.module.css';
import Footer from "../../../components/Footer";
import api from "../../../services/api";

function DeleteRent(){

    const [successMessage, setSuccessMessage] = useState('');
    const [rent, setRent] = useState([]);

    const id = useRef('');

    async function drop() {
        try{

            if(!id.current.value){
                setSuccessMessage("O ID é obrigatório");
                return;
            }

            await api.delete(`/Aluguel/Devolver Cópia?id=${id.current.value}`)
            setSuccessMessage("Cópia devolvida com sucesso");

        }catch(error){
            setSuccessMessage("Deu ruim :( " + error);
        }
    }

    useEffect(()=>{
        api.delete(`/Aluguel/Devolver Cópia?id=${id.current.value}`)
        .then((response)=>{
            setRent(response.data)
        })
    },[])

    return(
        <>
        <Header/>
        <div className={style.delete}>
            <form className={style.form}>
                <h1>Delete Rent</h1>
            <input placeholder="ID" name="id" type="text" ref={id}/>
            <button className={style.button} type="button" onClick={drop}>Submit</button>
            </form>
            <Footer/>
        {successMessage && <div className={style.alert}>{successMessage} </div>}
        </div>
        </>
    );
}

export default DeleteRent;