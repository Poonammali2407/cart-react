/*import { useEffect,useState } from "react"
const Fetch=()=>
{
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then(d=>setData(d))
    },[data])
    return (
        <div className="Fetch">
           {data && data.map((x)=>{
            return (
                <section key={x.id}>
                    <p>{x.name} <span>{x.email}</span> <span>{x.address.zipcode}</span></p>
                    
                </section>
            )
           })}
        </div>
    )
}

export default Fetch
*/




