import React,{ useContext } from "react"
import { context } from "./context/AppContext"

function CompC(){
    const {quality,name} = useContext(context);
    // const {quality} = useContext(context);
    // console.log("data",data);
    return(
        <div>
        <h2>Component C {quality} and {name} </h2>
        </div>
    )
}
export default CompC  

/*
Note:- Yaha pr context api ka use kiya gya hai jha pr mai AppContext bnakr direct data context se
Without props driling kiye component C me send kiya hu

*/