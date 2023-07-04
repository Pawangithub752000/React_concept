function Child(props){
    // props.myName = "rakesh":- means props are read only property readonly me value asign nhi kiya ja shakta hai 

    console.log(props.myName)
    return(
        // <h1>my name is {props.myName}</h1>
        <h1>This is child components</h1>
    )
}
export default Child