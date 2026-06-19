import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const[userInput, setUserInput] = useState({
   initialInvestment: 10000,
   annualInvestment: 1200,
   expectedReturn: 6,
   duration: 10,
  })
  const inputISValid= userInput.duration >= 1;
  function handlechange(inputIndentifer, newValue){
   setUserInput(prevuserInput => {
     return{
       ...prevuserInput,
       [inputIndentifer] : +newValue
     }
   })
  }
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onchange = {handlechange} />
    {!inputISValid && (
      <p className="center">please enter valid data</p>
    )}
    {inputISValid && <Results input={userInput} />}
    </>
  )
}

export default App
