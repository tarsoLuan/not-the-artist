import LoginWrapper from "../components/login/LoginWrapper";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import './Layout.css';

export default function Layout() {

    const [user, setUser] = useState({ id: "", email: "", password: ""});

    if(user.id) {
        return (
            <div>
                <nav className='flex flex-col items-center justify-between'>
                    <ul>
                        <li>
                            <Link className="text__color-black" to={"/"}>
                                <span className="logo__text">not the
                                    <p className="logo__text-paragraph">artist</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="text__color-black" to={"/quadrinhos"}>quadrinhos</Link>
                        </li>
                        <li>
                            <Link className="text__color-black" to={"/livros"}>livros</Link>
                        </li>
                        <li>
                            <Link className="text__color-black" to={"/decoração"}>decoração</Link>
                        </li>
                        <li>
                            <LoginWrapper user={user} setUser={setUser}/>
                        </li>
                    </ul>
                </nav>
                <Outlet context={[user, setUser]} />
            </div>
        )
    } else {
        return (
            <LoginWrapper user={user} setUser={setUser}/>
        )
    }
}
