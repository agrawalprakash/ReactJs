import './App.css' ;
import { useState, useEffect } from 'react';

export const Text = () => {

    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, []);


}