import  axios  from "axios"
const API_KEY="174c65cdca8814dd222c0f0e02a0d7ee"
const URL="https://api.openweathermap.org/data/2.5/weather"

const takeWeather= async (query)=>{
    let {data}= await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data
}
export default takeWeather;