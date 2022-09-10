import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";


export const ChatWindow = () => {
    const [message, setMessage] = useState('')
    const [chatMessages, setChatMessages] = useState([])
    const [user] = useContext(UserContext)

    useEffect(() => {
        setInterval(checkMessages, 1000)
        checkMessages()
    }, [])

    function checkMessages() {
        return fetch('http://127.0.0.1:5000/')
            .then(async (res) => {
                if (res.status >= 400) {
                    throw new Error(await res.text())
                }

                return res.json()
            })
            .then((data) => {
                setChatMessages(data)
            })
    }

    const handleChange = event => {
        setMessage(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        //setChatMessages([...chatMessages, message])
        if(!message?.trim().length) {
            return
        }
        setMessage('')
        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                userId: user,
                text: message,
            })
        })
    }

    function createMessageTemplate(message) {
        const timestamp = new Date(message.timestamp)
        return (<li className="message" key={message.id}>
            <span className="timestamp">[{timestamp.getHours().toString().padStart(2, '0')}:{timestamp.getMinutes().toString().padStart(2, '0')}:{timestamp.getSeconds().toString().padStart(2, '0')}] </span>
            <span className="userName">{message.userId}: </span>
            <span className="text">{message.text}</span>
        </li>)
    }

    return (
        <div className="text-3xl border-4 border-indigo-600 flex flex-col">
            <h2 className="border-b-4 border-b-blue-900">ChatWindow</h2>

            <div className="grow h-96 flex">
                <ul className="self-end">{
                    chatMessages.map(createMessageTemplate)
                }</ul>
            </div>

            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <input
                        className="border-t-4 border-r-4 border-blue-900"
                        onChange={handleChange}
                        value={message}
                    />
                    <button
                        type="submit"
                        className="border-t-4 hover:bg-gray-800 grow border-blue-900"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
