import { useState } from 'react'


function App() {
const[inputValue, setInputValue] = useState("88787");

const handleChangeInput = (e) =>{
  setInputValue(e.target.value);
}

  return (
    <div style={{textAlign: "center"}}>
      <h1>Ingresa un texto</h1>
      <hr />
      <input
      onChange={(e) => handleChangeInput(e)}
      type="text" 
      name="test"
      value={inputValue} 
      />
      </div>
  )
}
      
export default App
