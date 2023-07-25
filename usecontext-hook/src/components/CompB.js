import React,{useContext} from 'react'
import CompC from "./CompC"
import {context} from "./context/AppContext"
                   
function CompB(){
    const {quality,name} = useContext(context)
    return(
        <div>
       <h2>Component B {quality} and {name}</h2>
       <CompC />
        </div>
    )
}
export default CompB 