import './App.css';
import {Landingpage} from "./components/Landingpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {UserContext} from "./UserContext";

function App() {
  const userState = React.useState(null)

  return (
        <UserContext.Provider value={userState}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/chat" element={<Landingpage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </UserContext.Provider>
    );
}

export default App;
