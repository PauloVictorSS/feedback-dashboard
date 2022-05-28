import { Link } from "react-router-dom"
import "../css/Login.css"

function Login() {

    return (
        <>
            <h1>Dashboard de feedbacks</h1>

            <form action="" id="login" className="div-box">
                
                <label htmlFor="email">Endereço de email</label>
                <input type="text" name="email" id="email"/>
                <label htmlFor="password">Senha</label>
                <span><Link to="">Esqueceu sua senha?</Link></span>
                <input type="password" name="password" id="password" />
                <button type="submit">Entrar</button>
            </form>
        </>
    )
  }
  
  export default Login