import NewAccountForm from "./NewAccountForm";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function LoginWrapper({user, setUser}) {
    console.log('user: ', user);

    const [isLogin, setIsLogin] = useState({ id: "", email: "", senha: ""});
    if (user.id) {
        return (
            <div>
                <button onClick={() => setUser({})}>Logout</button>
            </div>
        )
    } else {
        if (isLogin) {
            return <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} user={user} setUser={setUser}/>
        } else {
            return <NewAccountForm isLogin={isLogin} setIsLogin={setIsLogin} user={user} setUser={setUser}/>
        }
    }
}
