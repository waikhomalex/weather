
import { useState } from "react";
import takeWeather from "./Take"
function Weather(){
  const [load,setLoad]=useState("")
  const [wea,setWea]=useState({})
  const Handle=(e)=>{
    setLoad(e.target.value)
  }
  const Search= async (e)=>{
    if(e.code === "Enter"){
    let data= await takeWeather(load)
    setWea(data)
    setLoad("")
  }
}
  

  return(
    <div>
      <input type="text" placeholder="enter your city" value={load} onChange={Handle} onKeyPress={Search}/>
    {wea.main &&
      <div id="city">
       {wea.name}
        <span>{wea.sys.country}</span>
        <div id="temp">
          {wea.main.temp}
        <span>&deg;C</span>
        </div>
        <div id="img">
          <img src={`http://openweathermap.org/img/wn/${wea.weather[0].icon}@2x.png`}/>
          <p>{wea.weather[0].description}</p>
          
        </div>
      </div>

}
    </div>
  )
}
export default Weather;