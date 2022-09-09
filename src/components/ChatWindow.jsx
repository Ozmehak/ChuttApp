import {useState} from "react";

export const ChatWindow = () => {
    const chatMessages = ["1", "3", "4", "5"]
    // const chatMessage =
    const [message, setMessage] = useState('')


    const handleSubmit = event => {
        chatMessages.push(event.target.value)
        setMessage(event.target.value)
        console.log(chatMessages)

    }

    return (
        <div className="text-3xl border-4 border-indigo-600 flex flex-col">
            <h2 className="border-b-4 border-b-blue-900">ChatWindow</h2>

            <div className="grow h-96 flex">
                <ul className="self-end">
                    {chatMessages.map((number) => <li key={number.toString()} value={number}></li>)}
                </ul>
            </div>

            <div className="flex">
                <input
                    className="border-t-4 border-r-4 border-blue-900"
                    onChange={handleSubmit}
                    value={message}
                />
                <button
                    className="border-t-4 hover:bg-gray-800 grow border-blue-900"

                >
                    Send
                </button>
            </div>
        </div>
    )
}
