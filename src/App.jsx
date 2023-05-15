import React,{useState} from 'react'

const App = () => {
  const [temperatuteValue,setTemperatureValue] = useState(10);
  const [temperatureColor,setTemperatureColor] = useState("cold")


  const increaseTemperature = () =>{
    const newTemperature = temperatuteValue +1
    if (newTemperature>15){
      setTemperatureColor('hot')
    }
    setTemperatureValue(temperatuteValue +1)

  }
  const decreaseTemperature = () =>{
    const newTemperature = temperatuteValue -1
    if (newTemperature<=15){
      setTemperatureColor('cold')
    }
    setTemperatureValue(temperatuteValue -1)
  }
  const changeTemperature = () =>{
    if (temperatureColor == "cold"){
      setTemperatureColor("hot")
    }
    else{ 
      setTemperatureColor("cold")

    }
  }

  return (
    <div className='app-container'>
      <div className="temperature-display-container">
        <div onClick={()=> changeTemperature()} className ={`temperature-display ${temperatureColor}`}>
        {temperatuteValue}°C
        </div>
        </div>
        <div className="button-container">
          <button onClick={()=>increaseTemperature()}>+</button>
          <button onClick={()=> decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App
