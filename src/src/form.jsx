import './App.css';
import { useState } from 'react';


// FORM

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const Save = () => {
      const str = JSON.stringify({ "Name": name, "Email": email })
      localStorage.setItem("Obj", str);
      console.log("get", JSON.parse(localStorage.getItem("Obj")))
    }
  
    return (
      <div className='App'>
        <form>
          <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
          <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
  
          <button onClick={() => Save()}>Submit</button>
        </form>
      </div>
    )
  }
  
  
  export default Form;