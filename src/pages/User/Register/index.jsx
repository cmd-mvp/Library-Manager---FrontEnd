import { useState, useRef } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import api from '../../../services/api'
import style from './Register.module.css'


function UserRegister() {
 
  //const [users, setUsers] = useState([])

  const [successMessage, setSuccessMessage] = useState("")

  
  const inputUserName = useRef()
  const inputDateOfBirth = useRef()
  const inputCPF = useRef()
  const inputPassword = useRef()
  const inputRePassword = useRef()
  

  
  async function CreateUsers() {
   try{
    await api.post('/usuario/cadastro', {
      Username: inputUserName.current.value,
      DataNascimento: inputDateOfBirth.current.value,
      CPF: inputCPF.current.value,
      Password: inputPassword.current.value,
      RePassword: inputRePassword.current.value
    })

    setSuccessMessage("Usuário cadastrado com sucesso!")
  }catch(error){
    setSuccessMessage("Deu ruim :( " + error)
  }
  }

  return (
   <>
    <Header/>
    <div className={style.container}> 
      <form className={style.form}> 
        <h1 className={style.h1}>
          User Register
          <input placeholder = "UserName" name='username' type='text' ref={inputUserName}/>
          <input placeholder = "Date Of Birth" name='dateOfBirth' type='date' ref={inputDateOfBirth}/>
          <input placeholder = "CPF" name='cpf' type='text'ref={inputCPF}/>
          <input placeholder = "Password" name='password' type='password'ref={inputPassword}/>
          <input placeholder = "RePassword" name='repassword' type='password'ref={inputRePassword}/>
          <button type='button' onClick={CreateUsers}>Register</button>
        </h1>
      </form>
      {successMessage && <div className={style.alert}>{successMessage}</div>} 
      <Footer/>
    </div>
    </>
  )
}

export default UserRegister;
