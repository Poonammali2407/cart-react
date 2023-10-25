const FunProps=(props)=>{
    return(
        <div>
            <h1> My name is {props.name} My age is{props.age} </h1>
            <button onClick={props.clic()}>Click</button>
        </div>
   
    )
}
export default FunProps