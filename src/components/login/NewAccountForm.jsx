import { useState } from "react";
import { newAccount } from "../../infra/users";

export default function NewAccountForm({user, setUser, setIsLogin}) {
    const [inputs, setInputs] = useState({
        name: null,
        email: null,
        password: null
    });

    const [errors, setErrors] = useState({});

    const validateValues = () => {
        let allErrors = {};

        const userInputs = inputs;
        console.log('userInputs: ', userInputs);
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        if(!regex.test(userInputs.email)){
            allErrors.email = "Email não é válido";
        }

        if (userInputs.password.length < 5) {
          allErrors.password = "Senha é muito curta";
        }
        console.log('allErrors: ', allErrors);
        setErrors(allErrors);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]: value}))

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let isEmpty = false;

        validateValues();
        console.log(errors);

        if(Object.keys(errors).length > 0){
            for(let key in errors){
                alert(errors[key]);
            }
        } else {
            for (let key in inputs) {
                if(inputs[key] === null || inputs[key] === undefined || inputs[key] === ''){
                    isEmpty = true;
                }
            }
    
            if(isEmpty === true){
                alert('Preencha todos os campos');
            } else {
                setUser((obj) => {
                    const returnObj = {
                        ...obj,
                        ["email"]: inputs.email,
                        ["password"]: inputs.password,
                    };
                    return returnObj;
                });
                newAccount(user, setUser);
            }
        }
    }

    return (
        <div className="login__card">
            <p className="login__text-default">Junte-se</p>
            <p className="login__text-default">ao <i>not the artist</i></p>
            <p className="login__text-italic">e registre seu perfil</p>
            <form className="form__section-sign">
                <div>
                    <input className="input__box" name="name" placeholder="Nome" onChange={handleChange} value={inputs.name || ""}/> <br></br>
                    <input className="input__box" name="email" placeholder="E-mail" onChange={handleChange} value={inputs.email || ""}/> <br></br>
                    <input className="input__box" name="password" type="password" placeholder="Senha" onChange={handleChange} value={inputs.password || ""}/> <br></br>
                </div>
            </form>
            <div className="button__section">
                    <input type="button" className="form__button" onClick={handleSubmit} value="Cadastre-se"/>
                </div>
            <div className="component__footer">
                <p className="footer__text">Já é cadastrado?</p>
                <a className="footer__text-link" onClick={() => setIsLogin(true)}>Faça login</a>
            </div>
        </div>
    )
}