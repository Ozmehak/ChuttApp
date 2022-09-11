import React from "react";

export const useMessaging = () => {
    const [messages, setMessages] = React.useState([])
    let poller
    const POLLING_INTERVAL = 5000

    function subscribe() {
        if (poller) return
        poller = setInterval(getMessages, POLLING_INTERVAL)
    }

    function unsubscribe() {
        if (!poller) return
        clearInterval(poller)
    }

    function getMessages() {
        return fetch('http://127.0.0.1:5000/')
            .then(async (res) => {
                if (res.status >= 400) {
                    throw new Error(await res.text())
                }

                return res.json()
            })
            .then((data) => {
                setMessages(data)
            })
    }

    /**
     *
     * @param {string} userId
     * @param {string} text
     * @returns {Promise<Response>}
     */
    function sendMessage(userId, text) {
        if(!text?.trim().length) {
            return Promise.reject("nothing4u")
        }

        return fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                userId,
                text,
            })
        })
    }

    return {
        messages,
        subscribe,
        unsubscribe,
        getMessages,
        sendMessage,
    }
}
