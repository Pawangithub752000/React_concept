import React,{useContext} from 'react'
import { context } from './context/AppContext';
import CompB from "./CompB"

function CompA(){
    const {quality,name} = useContext(context);
    return(
        <div>
        <h2>Component A {quality} and {name}</h2>
        <CompB />
        </div>
    )
};
export default CompA;