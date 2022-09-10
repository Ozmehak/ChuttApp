import {useState} from "react";

export const ChatWindow = () => {
    const [message, setMessage] = useState('')
    const [chatMessages, setChatMessages] = useState(["1", "3", "4", "5"])


    const handleChange = event => {
        setMessage(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setChatMessages([...chatMessages, message])
        setMessage('')
    }

    return (
        <div className="text-3xl border-4 border-indigo-600 flex flex-col">
            <h2 className="border-b-4 border-b-blue-900">ChatWindow</h2>

            <div className="grow h-96 flex">
                <ul className="self-end">
                    {chatMessages.map((number) => <li key={number.toString()}>{number.toString()}</li>)}
                </ul>
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
