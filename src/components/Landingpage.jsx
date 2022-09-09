import {ChatWindow} from "./ChatWindow";
import {Rooms} from "./Rooms";
import {Users} from "./Users";

export const Landingpage = () => {
    return (
        <div className="grid grid-cols-3">
            <Rooms />
            <ChatWindow />
            <Users />
        </div>
    )
}
