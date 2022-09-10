import {UserContext} from "../UserContext";
import {useContext, useState} from "react";


export const LoginForm = () => {
    const [, setUser] = useContext(UserContext)
    const [name, setName] = useState('')

    function login() {
        if (!name?.trim().length) return
        setUser(name)
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div className="border-4 border-black">
            <form onSubmit={e => e.preventDefault()}>
                <input
                    onChange={handleChange}
                    name="userName"
                    className="form-control border border-solid border-gray-300 rounded"
                />

                    <button onClick={login}>Login</button>

            </form>

        </div>
    )
}
