import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase';

export function login(user, setUser) {
    if (user) {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((credenciais) => {
                setUser((obj) => {
                    const retorno = {
                        ...obj,
                        ["id"]: credenciais.user.uid,
                    };
                    return retorno;
                });
            })
            .catch((error) => {
                console.log(`${error.code} = ${error.message}`);
                alert("Login Inválido");
            });
    } else {
        alert("Login Inválido");
    }
}

export function logout(user, setUser) {
    signOut(auth).then(() => {
        setUser({ id: "", email: "", password: "" });
    });
}

export function newAccount(user, setUser) {
    console.log('newAccount ---> ' + user);
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((credenciais) => {
            setUser((obj) => {
                const accountObj = {
                    ...obj,
                    ["id"]: credenciais.user.uid,
                };
                return accountObj;
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Erro na criação da conta");
        });
}
