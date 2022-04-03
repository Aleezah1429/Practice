import './App.css';
import { useState } from 'react';


// TODO LIST

function Todo() {

  const [items, setItems] = useState("");
  const [lst, setLst] = useState([]);

  const AddList = () => {
    setLst([...lst, items])
    console.log(lst)
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input placeholder='Enter' onChange={(e) => { setItems(e.target.value) }} />
      <button onClick={() => AddList()}>Add</button>

      {lst.map((e) => {
        return(
        <div>
          {e}
        </div>
        )
      })}

    </div>
  );
}

export default Todo;
