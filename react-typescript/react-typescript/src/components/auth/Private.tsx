import {Login} from "../../components/auth/Login";
import {Profiles} from "../../components/auth/Profiles";
import {ProfileName} from "../../components/auth/Profiles";

type PrivateProps = {
    isLoggedIn : boolean,
    Component : React.ComponentType<ProfileName>
}

export const Private = ({isLoggedIn, Component}:PrivateProps) => {
    if(isLoggedIn){
        return <Component name="Jai"/>
    }else {
        return <Login/>
    }
}