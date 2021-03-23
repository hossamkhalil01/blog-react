import { UserContext } from "./UserContext";
import { useContext } from "react";
export function Profile(){
    const loogedUser = useContext(UserContext);
    console.log(loogedUser);
    return (
        <h1>
            test
        </h1>
    )
}