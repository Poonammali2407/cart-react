/*import { useEffect,useState } from "react"

const Search=()=>{
    const[data,setData]=useState([])
    const[Search,setSearch]=useState("")
    useEffect(() =>
    {
        fetch("https://jsonplaceholder.typicode.com/users")                                                                 
        .then(res=>res.json())
        .then(d=>setData(d))
    },[data] )                                                                                                                                                         zzz)
    return(
      <div>
        <center>
            <input type={'search'} onChange={(e)=>setSearch(e.target.value)}></input>
        </center>
        {data.filter((item)=>item.name.toLowercase().includes(Search).map((item)=>{
            return(
                <section key={item.id}>
                 <center>
                <p>{item.name}</p>
                    </center>
                </section>
            )

            
            })

        )
      </div>
    )
}
export default Search
*/

