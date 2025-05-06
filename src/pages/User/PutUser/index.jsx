import { useEffect, useRef, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import api from "../../../services/api";
import style from "./PutUser.module.css"
import { useParams } from "react-router-dom";

function PutUser(){

    const [sucessMessage, setSucessMessage] = useState("")
    const [user, setUser] = useState([])
    
    const {cpf} = useParams();

    const inputUserName = useRef(); 
    const inputDateOfBirth = useRef();

    async function change() {
        try{
            await api.put(`/Usuario?CPF=${cpf}`,{
                Username: inputUserName.current.value,
                DataNascimento: inputDateOfBirth.current.value
            })
            setSucessMessage("Usuário atualizado")
            return;
        }catch(error){
            setSucessMessage("Deu ruim :(" + error)
        }
    }

    useEffect(()=>{
        api.put(`/Usuario?CPF=${cpf}`)
        .then((response)=>{
            setUser(response.data)
        })
    },[])

    return(
       <>
       <div className= {style.put}>
        <Header/>
        <form className= {style.form}>
            <h1 className= {style.h1}>Put User
                <input placeholder= "UserName" name= "username" type="text" ref={inputUserName}/>
                <input placeholder= "DateOfBirth" name="birth" type="date" ref={inputDateOfBirth}/>
                <button className={style.button} onClick={change}>Submit</button>
                </h1>
        </form>
             {sucessMessage && <div className={style.alert}>{sucessMessage}</div>}
        
        <Footer/>
       </div>
       </>
    )
}

export default PutUser;