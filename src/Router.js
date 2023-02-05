import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { useState, createContext } from "react";

export const AppContext = createContext();

function Router() {

    const [userName, setUserName] = useState("PrakashGreat");

    return (

        <div className="App" >
            <AppContext.Provider value={{userName, setUserName}}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />;
                        <Route path="/menu" element={<Menu />} />;
                        <Route path="/contacts" element={<Contacts />} />;
                        <Route path="*" element={<h1>You are not in a page</h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>

    )

}