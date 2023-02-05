import { useContext } from "react";
import { AppContext } from "../Router";

export const Contacts = () => {

    const { userName } = useContext(AppContext);
    return (
    
            <div>
                {" "}
                PROFILE, user is : {userName}
                
            </div>

        )
};