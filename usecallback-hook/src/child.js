import { memo } from "react"

function Child(props){
    const {callback}   = props
    console.log("child components")
    return(
        <div>Child Component</div>
    )
}
export default memo(Child)