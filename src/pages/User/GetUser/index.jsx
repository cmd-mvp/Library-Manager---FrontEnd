import { useState, useEffect, useRef } from "react";
import Footer from "../../../components/Footer";
import api from "../../../services/api";
import style from './GetUser.module.css';
import Header from "../../../components/Header";
 

function GetUser() {

    const [successMessage, setSuccessMessage] = useState("");
    const [user, setUser] = useState([]);

    const cpf = useRef() 
    
    async function search() {
        try{
            if (!cpf.current.value){
                setSuccessMessage("O CPF é obrigatório!")
                return;
            }
            const response = await api.get(`/Usuario?CPF=${cpf.current.value}`);
            const UserNameOutput = JSON.stringify(response.data.userName);
            const BirthOutput = JSON.stringify(response.data.dataNascimento);
            const CPFOutput = JSON.stringify(response.data.cpf);

            setSuccessMessage(
                <>
                CPF: {CPFOutput} <br />
                Date of Birth: {BirthOutput} <br />
                UserName: {UserNameOutput}
                </>
            )
            

        }catch(error){
            setSuccessMessage("deu ruim :(" + error);
        }
    }

   /* useEffect(() => {
        search()
    }, [])*/

    useEffect(() => {
        api.delete('/Usuario')
        .then((response) => {
            setUser(response.data)
        })
    }, [])

    return (
        <>
            <div className={style.get}>
                <Header/>
                <form className={style.form}>
                <h1>Get User</h1>
                    <input className = {style.cpf} placeholder="CPF" name="CPF" type="text" ref={cpf} />
                    <button className= {style.button} type="button" onClick={search}>Submit</button>
                </form>
                {successMessage && <div className={style.alert}>{successMessage}</div>}
                <Footer />
            </div>
        </>
    );
}

export default GetUser;