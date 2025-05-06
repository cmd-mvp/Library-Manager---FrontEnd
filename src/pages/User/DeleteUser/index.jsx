import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import style from './DeleteUser.module.css'
import { useEffect, useRef, useState } from 'react';
import api from "../../../services/api";

function DeleteUser(){

    const [sucessMessage, setSuccessMessage] = useState('')
    const [user, setUser] = useState([])


    const inputCPF = useRef();

    async function drop() {

        try{

            if(!inputCPF.current.value){
                setSuccessMessage('O CPF é obrigatório')
                return;
            }

            await api.delete(`/Usuario/Delete?CPF=${inputCPF.current.value}`)
            setSuccessMessage('Usuário excluído')
        }
        catch(error){
            setSuccessMessage("deu ruim :(" +error)
        }
        
    }

    useEffect(() =>{
        api.delete('/Usuario/Delete')
        .then((response) =>{
            setUser(response.data)
        })
    }, [])

    return (
        <>
        <div className={style.delete}>
        <Header/>
        <form className={style.form}>
            <h1>Delete User</h1>
            <input className = {style.cpf} placeholder='CPF' name='cpf' type='text' ref={inputCPF}/>
        <button className={style.button} type='button' onClick={drop}>Submit</button>
        </form>
        <Footer/>
        {sucessMessage && <div className={style.alert}>{sucessMessage}</div>}
        </div>
        </>
    );
}

export default DeleteUser;