import {ChatWindow} from "./ChatWindow";
import {Rooms} from "./Rooms";
import {Users} from "./Users";
import {LoginForm} from "./LoginForm";
import {useContext} from "react";
import {UserContext} from "../UserContext";

export const Landingpage = () => {
    const [userName] = useContext(UserContext)

    return (
        <div className="grid grid-cols-3">
            {!userName ?
                <LoginForm/> :
                [
                    <Rooms/>,
                    <ChatWindow/>,
                    <Users/>
                ]}
        </div>
    )
}
