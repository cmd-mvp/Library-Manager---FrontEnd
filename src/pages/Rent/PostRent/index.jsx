import { useRef, useState } from 'react';
import style from './PostRent.module.css';
import api from '../../../services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function PostRent(){

    const [successMessage, setSuccessMessage] = useState('');
    const copiaId = useRef('');
    const userName = useRef('');
    
    async function create() {
        try{

            if(!copiaId.current.value && !userName.current.value){
                setSuccessMessage("A Cópia e/ou UserName não pode ser nulo");
                return;
            }

            await api.post(`/Aluguel/Alugar?CopiaId=${copiaId.current.value}&UserName=${userName.current.value}`)
            setSuccessMessage("Aluguel realizado com sucesso!")

        }catch(error){
            setSuccessMessage("Deu ruim :( " + error);
        }
    }

    return(
        <>
        <div className={style.post}>
            <Header/>
        <form className={style.form}>
            <h1>Post Rent</h1>
            <input placeholder='CopiaId' name='copiaid' type='text' ref={copiaId}/>
            <input placeholder='UserName' name='username' type='text' ref={userName}/>
            <button className={style.button} type='button' onClick={create}>Submit</button>
        </form>
            <Footer/>
            {successMessage && <div className={style.alert}>{successMessage}</div>}
        </div>
        </>
    );
}

export default PostRent;