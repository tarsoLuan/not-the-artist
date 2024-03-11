// import axios from 'axios';
import { useState } from "react";
import { login } from "../../infra/users";
import './Login.css';

export default function LoginForm({user, setUser, setIsLogin}) {

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser((obj) => {
            return { ...obj, [name]: value }
        });
    }

    const handleSubmit = (event) => {
        console.log(user);
        event.preventDefault();
        setIsLoading(true)

        let isEmpty = false;

        for (let key in user) {
            if((user[key] === null || user[key] === undefined || user[key] === '') && key !== 'id'){
                isEmpty = true;
            }
        }

        if(isEmpty === true){
            alert('Preencha todos os campos');
            setIsLoading(false)
        } else {
            login(user, setUser);
        }
    }

    return (
        <div className="login__card">
            <p className="login__text-default">Entre na sua</p>
            <p className="login__text-default">conta</p>
            <p className="login__text-italic">e acesse a nossa loja</p>
            <form name="form-hook" className="form__section">
                
                <input className="input__box" type="email" name="email"
                       placeholder="E-mail" onChange={handleChange} value={user.email || "" }/> <br></br>
                <input className="input__box" name="password" placeholder="Senha" type="password" onChange={handleChange} value={user.password || ""}/> <br></br>
                <div className="button__section">
                    <input type="button" className="form__button" onClick={handleSubmit} disabled={isLoading} value="Login"/>
                </div>
            </form>
            <div className="component__footer">
                <p className="footer__text">Não é cadastrado?</p>
                <a className="footer__text-link" onClick={() => setIsLogin(false)}>Crie sua conta</a>
            </div>
        </div>
    )
}