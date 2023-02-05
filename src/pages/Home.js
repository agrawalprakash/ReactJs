import { useContext } from "react";
import { AppContext } from "../Router";

export const Home = () => {

    const { userName } = useContext(AppContext);
    return <h1>This is the Home Page. User Name is {userName}</h1>
};