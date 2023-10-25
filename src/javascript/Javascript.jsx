const javascript=()=>{
   
    const name="Poonam";
    const age=23;
    function clicked()
    {
        document.body.style.background="red"
    }

    function MY(){
        let a= document.getElementById("i1")
         a.value=a.value.toUpperCase()
    }
    return(
       
      <div className="javascript">
        <h1>My name is {name} and my age is {age}</h1>
        <h1>{`my name is ${name} and age is ${age}`}</h1>
        <button onClick={clicked}>Click</button>
        <input type="text" id='i1' onBlur={MY}></input>
      </div>

    )
}
export default javascript