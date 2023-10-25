/*import { useState } from "react"
function App() {
  const [quantity, setQuantity] = useState(0);
  const pricePerItem = 100; 
  const[msg,setMsg]=useState('Buy')

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    return quantity * pricePerItem;
  };

  const divStyle = {
    backgroundColor: 'whitesmoke',   
    height: '600px',           
    width: '300px'             
  };

  return (
  
     <center><div style={divStyle} >
      <br />
      <h1>Product </h1>
      <img src="https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg" height={'180px'} alt="" />
      <br />
      
      <button onClick={increaseQuantity}>+</button>
      <p> {quantity}</p> 
       <button onClick={decreaseQuantity}>-</button>
      
      <br /><br />
            
    <br />
      
   
      <p>Total Price:  {calculateTotalPrice()}</p>
        <br /><br />
      <button onClick={()=>setMsg('Thank u visit again')}>{msg}</button>
    </div>
    </center>
  );
}

export default App
*/
