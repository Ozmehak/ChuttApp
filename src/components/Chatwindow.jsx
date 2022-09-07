export const Chatwindow = () => {
    return (
        <div className="text-3xl w-2/5 border-4 border-indigo-600 flex flex-col">
            <h2 className="border-b-4 border-b-blue-900">ChatWindow</h2>
            <div className="grow h-48 flex">
                <p className="self-end">här kommer texten vara</p>

            </div>
            <div className="flex">
            <input className="border-t-4 border-r-4 border-blue-900"/>
            <button className="border-t-4 hover:bg-gray-800 grow border-blue-900">Send</button>
            </div>
        </div>
            )
}
