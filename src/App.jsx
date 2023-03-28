import { useState } from 'react'


function App() {
const[inputValue, setInputValue] = useState({
  test1: "",
  test2:"",
  password:"",
  validEmail:"",
  checkbox:"",
  date:"",
  color:"",
  datetimelocal:"",
  file:"",
  hidden:"",
  image:"",
  month:"",
  number:"",
  radio:"",
  range:"",
  reset:"",
  search:"",
  submit:"",
  tel:"",
  text:"",
  time:"",
  url:"",
  week:"",
});



const handleChangeInput = (e) =>{
  setInputValue({
    ...inputValue,
      [e.target.name]: e.target.value
  });
  console.log(inputValue);

 
  
}

  return (
    <div style={{textAlign: "center"}}>
      <h1>Ingresa un texto</h1>
      <hr />
      <label htmlFor="test1" >Test1</label>
      <input
      id="test1"
      onChange={(e) => handleChangeInput(e)}
      type="text" 
      name="test1"
      value={inputValue.test1} 
      /> <br></br>
<lavel>
Test2
<input
      className="mt-2"
      id="test2"
      onChange={(e) => handleChangeInput(e)}
      type="text" 
      name="test2"
      value={inputValue.test2} 
      />
      </lavel>
      <br/>
      <label htmlFor="password" >Password</label>
      <input
      className="mt-2"
      id="password"
      onChange={(e) => handleChangeInput(e)}
      type="password" 
      name="password"
      value={inputValue.password} 
      /> <br/>

<label htmlFor="emailInput" >Email</label>
      <input
      className="mt-2"
      id="emailInput"
      onChange={(e) => handleChangeInput(e)}
      type="email" 
      name="validEmail"
      value={inputValue.validEmail} 
      /> <br/>

<label htmlFor="checkbox" >Checkbox</label>
      <input
      className="mt-2"
      id="checkbox"
      onChange={(e) => handleChangeInput(e)}
      type="checkbox" 
      name="checkbox"
      value={inputValue.checkbox} 
      /> <br/>

<label htmlFor="date" >Date</label>
      <input
      className="mt-2"
      id="date"
      onChange={(e) => handleChangeInput(e)}
      type="date" 
      name="date"
      value={inputValue.date} 
      /> <br/>

<label htmlFor="color" >Color</label>
      <input
      className="mt-2"
      id="color"
      onChange={(e) => handleChangeInput(e)}
      type="color" 
      name="color"
      value={inputValue.color} 
      /> <br/>

<label htmlFor="datetime-local" >datetime-local</label>
      <input
      className="mt-2"
      id="datetime-local"
      onChange={(e) => handleChangeInput(e)}
      type="datetime-local" 
      name="datetimelocal"
      value={inputValue.datetimelocal} 
      /> <br/>


<label htmlFor="file" >File</label>
      <input
      className="mt-2"
      id="file"
      onChange={(e) => handleChangeInput(e)}
      type="file" 
      name="file"
      value={inputValue.file} 
      /> <br/>

<label htmlFor="hidden" >Hidden</label>
      <input
      className="mt-2"
      id="hidden"
      onChange={(e) => handleChangeInput(e)}
      type="hidden" 
      name="hidden"
      value={inputValue.hidden} 
      /> <br/>

<label htmlFor="image" >Imagen</label>
      <input
      className="mt-2"
      id="image"
      onChange={(e) => handleChangeInput(e)}
      type="image" 
      name="image"
      value={inputValue.image} 
      /> <br/>

<label htmlFor="month" >Month</label>
      <input
      className="mt-2"
      id="month"
      onChange={(e) => handleChangeInput(e)}
      type="month" 
      name="month"
      value={inputValue.month} 
      /> <br/>

<label htmlFor="number" >Number</label>
      <input
      className="mt-2"
      id="number"
      onChange={(e) => handleChangeInput(e)}
      type="number" 
      name="number"
      value={inputValue.number} 
      /> <br/>


<label htmlFor="radio" >radio</label>
      <input
      className="mt-2"
      id="radio"
      onChange={(e) => handleChangeInput(e)}
      type="radio" 
      name="radio"
      value={inputValue.radio} 
      /> <br/>
      
      <label htmlFor="range" >range</label>
      <input
      className="mt-2"
      id="range"
      onChange={(e) => handleChangeInput(e)}
      type="range" 
      name="range"
      value={inputValue.range} 
      /> <br/>
      
      <label htmlFor="reset" >reset</label>
      <input
      className="mt-2"
      id="reset"
      onChange={(e) => handleChangeInput(e)}
      type="reset" 
      name="reset"
      value={inputValue.reset} 
      /> <br/>
      
      <label htmlFor="search" >search</label>
      <input
      className="mt-2"
      id="search"
      onChange={(e) => handleChangeInput(e)}
      type="search" 
      name="search"
      value={inputValue.search} 
      /> <br/>
      
      <label htmlFor="submit" >submit</label>
      <input
      className="mt-2"
      id="submit"
      onChange={(e) => handleChangeInput(e)}
      type="submit" 
      name="submit"
      value={inputValue.submit} 
      /> <br/>
      
      <label htmlFor="tel" >tel</label>
      <input
      className="mt-2"
      id="tel"
      onChange={(e) => handleChangeInput(e)}
      type="tel" 
      name="tel"
      value={inputValue.tel} 
      /> <br/>
      
      <label htmlFor="text" >text</label>
      <input
      className="mt-2"
      id="text"
      onChange={(e) => handleChangeInput(e)}
      type="text" 
      name="text"
      value={inputValue.text} 
      /> <br/>
      
      <label htmlFor="time" >time</label>
      <input
      className="mt-2"
      id="time"
      onChange={(e) => handleChangeInput(e)}
      type="time" 
      name="time"
      value={inputValue.time} 
      /> <br/>
      
      <label htmlFor="url" >url</label>
      <input
      className="mt-2"
      id="url"
      onChange={(e) => handleChangeInput(e)}
      type="url" 
      name="url"
      value={inputValue.url} 
      /> <br/>
      
      <label htmlFor="week" >week</label>
      <input
      className="mt-2"
      id="week"
      onChange={(e) => handleChangeInput(e)}
      type="week" 
      name="week"
      value={inputValue.week} 
      /> <br/>
      </div>
  )
}
      
export default App
