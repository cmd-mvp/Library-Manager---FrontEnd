import { useState, useRef, useEffect } from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import api from "../../../services/api";
import style from './GetRent.module.css';

function GetRent(){

    const [successMessage, setSuccessMessage] = useState('');
    const [rent, setRent] = useState([])

    const id = useRef('');

    async function search() {
        try{
            if(!id.current.value){
                setSuccessMessage("O ID é obrigatório!");
                return;
            }

           /* const response = await api.get(`/Aluguel?id=${id.current.value}`)
            const CopiaId = JSON.stringify(response.data.copiaId)
            const UserName = JSON.stringify(response.data.userName)
            
            setSuccessMessage(
                <>
                CopiaId: {CopiaId} <br/>
                UserName: {UserName} <br/>
                </>
            )*/
            
            var response = await api.get(`/Aluguel?id=${id.current.value}`)

            const CopiaId = JSON.stringify(response.data.copiaId)
            const HorarioDoAluguel = JSON.stringify(response.data.horarioDoAluguel);
            const Devolucao = JSON.stringify(response.data.devolucao);
            const StatusDoAluguel = JSON.stringify(response.data.statusDoAluguel);
            const UserName = JSON.stringify(response.data.userName)

            setSuccessMessage(
                <>
                CopiaId: {CopiaId} <br/>
                HorarioDoAluguel: {HorarioDoAluguel} <br/>
                Devolucao: {Devolucao} <br/>
                StatusDoAluguel: {StatusDoAluguel} <br/>
                UserName: {UserName}
                </>
            )

        }catch(error){
            setSuccessMessage("Deu ruim :(" + error)
    }
    }

    useEffect(()=>{
         api.get(`/Aluguel?id=${id.current.data}`)
        .then((response)=>{
            setRent(response.data)
        })
    },[])

    return(
        <>
        <div className={style.get}>
        <Header/>
            <form className={style.form}>
            <h1>Get Rent</h1>
            <input placeholder="ID" name="id" type="text" ref={id}/>
            <button className={style.button} type="button" onClick={search}>Submit</button>
            </form>
        <Footer/>
        {successMessage && <div className={style.alert}>{successMessage}</div>}
        </div>
        </>
    );
}

export default GetRent;