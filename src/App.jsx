import { useState } from "react";
import Header from "./components/Header"
import Inputs from "./components/Inputs"
import Results from "./components/Results";

function App() {
  const[inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
})

const handleChange = (inputType, enteredData) =>{
    setInputData((prevData)=>(
        {
        ...prevData,
        [inputType]: +enteredData,
        }
    ))
    getInputData(inputData);
}

  const getInputData = (inputData) =>{
    enteredData = inputData;
  }
  
  return (
    <div id="app">
      <Header />
      <Inputs inputData={inputData} handleChange={handleChange} />
      <Results inputData={inputData} />
    </div>
  )
}

export default App
