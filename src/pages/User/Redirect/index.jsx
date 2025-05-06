import { useEffect, useRef, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import style from './Redirect.module.css';
import api from "../../../services/api";
import {Link } from "react-router-dom";

function Redirect(){

    const [sucessMessage, setSucessMessage] = useState('')
    const [user, setUser] = useState([])

    const cpf = useRef()

    //must to be cpf as a argument perhabs
    async function search() {
        try{
            
            if(!cpf.current.value){
                setSucessMessage("O CPF é obrigatório")
                return;
            }
            const response = await api.get(`/Usuario?CPF=${cpf.current.value}`)

            if(!response.data){
                setSucessMessage("Usuário não encontrado");
                return;
            }
            setSucessMessage(
                <ul>
                    <li key={response.data.cpf}>
                        <Link className={style.putuser} to={`/putuser/${response.data.cpf}`}>
                            Editar
                        </Link>
                    </li>
                </ul>
            );
            console.clear();
        }catch(error){
            setSucessMessage(error)
        }
    }

    useEffect(() =>{
        api.get('/Usuario')
        .then((response) => {
            setUser(response.data)
        })
    }, [])


    return(
            <>
            <div className= {style.get}>
            <Header/>
            <form className= {style.form}>
            <h1 className= {style.h1}>
                Write CPF
            <input className = {style.cpf} placeholder="CPF" name="CPF" type="text" ref={cpf}/>
            <button className= {style.button} type="button" onClick={search}>Submit</button> 
            </h1>
            </form>
            {sucessMessage && <div className= {style.alert}>{sucessMessage}</div>}
            <Footer/>
            </div>
            </>
    );
}

export default Redirect;