"use client"

import {createContext , useEffect , useState} from "react";

export const UserSessionContext = createContext(null);

export default function UserSessionContextProvider({children}){

    const [userId , setUserId] = useState(null);
    const [sessionClaims , setSessionClaims] = useState(null);
    const apiUrl = "https://makaut-buddy.vercel.app"

                
        useEffect(() => {

            fetch(`${apiUrl}/api/v1/getAuth` , {
                mode: "no-cors"
            })
            .then(async (res) => {
                
                const response = await res.json();
                console.log(response , "response");
                setUserId(response.userId);
                setSessionClaims(response.sessionClaims);
            })

        } , [])

    return(
        <UserSessionContext.Provider value={{userId , sessionClaims}}>
            {children}
        </UserSessionContext.Provider>
    )
}