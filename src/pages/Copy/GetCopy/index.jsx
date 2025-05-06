import Header from '../../../components/Header';
import style from './GetCopy.module.css'
import Footer from '../../../components/Footer';
import api from "../../../services/api";
import { useEffect, useRef, useState } from 'react';

function GetCopy(){

    const [successMessage, setSuccessMessage] = useState('');
    const [copy, setCopy] = useState([])
    const id = useRef('');

    async function search() {
        try{
            if(!id.current.value){
                setSuccessMessage("O ID é obrigatório!")
                return;
            }

            const response = await api.get(`/Copia/${id.current.value}`)
            const idoutput = JSON.stringify(response.data.id)
            const livroidoutput = JSON.stringify(response.data.livroId)
            const disponiveloutput = JSON.stringify(response.data.disponivel)
            
            setSuccessMessage(
                <>
                Id: {idoutput} <br/>
                LivroId: {livroidoutput} <br/>
                Disponivel: {disponiveloutput} <br/>
                </>
            )

        }catch(error){
            setSuccessMessage("Deu ruim :(" + error)
        }
    }

    useEffect(()=>{
        api.get('/Copia')
        .then((response)=>{
            setCopy(response.data)
        })
    },[])

    return(
        <>
        <div className={style.get}>
            <Header/>
            <form className={style.form}>
            <h1 className={style.h1}>Get Copy</h1>
                <input placeholder='ID' name='id' type='text' ref={id}/>
                <button className={style.button} type='button' onClick={search}>Submit</button>         
            </form>
            <Footer/>
            {successMessage && <div className={style.alert}>{successMessage} </div>}
        </div>
        </>
    );
}

export default GetCopy;