import { useRef, useState } from "react";
import api from "../../../services/api";
import Header from "../../../components/Header";
import style from './PostCopy.module.css';
import Footer from "../../../components/Footer";

function PostCopy(){

    const [successMessage, setSuccessMessage] = useState('');
    const livroId = useRef();

    async function create() {
        try{
            /*if(!livroId.current.data){
                setSuccessMessage("O LivroId é obrigatório!")
                return;
            }*/
            await api.post('/Copia',{
                livroId: livroId.current.value
            })
            setSuccessMessage("Cópia cadastrada com sucesso!")

        }catch(error){
            setSuccessMessage("Deu ruim :(" + error)
        }
    }

    return(
        <>
        <Header/>
        <div className={style.container}>
            <form className={style.form}>
                <h1>Post Copy</h1>
            <input placeholder="LivroId" name="livroid" type="text" ref={livroId}/>
            <button type="button" className={style.button} onClick={create}>Submit</button>
            </form>
            {successMessage && <div className={style.alert}>{successMessage} </div>}
            <Footer/>
        </div>
        </>
    );
}

export default PostCopy;