const apiKey = "bd5e378503939ddaee76f12ad7a97608";
const showWeather = async ()=>{
    try{
        let inputCity = document.querySelector("#city");
        let city= inputCity.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Invalid City")
        }
        let data = await response.json();
        console.log(Object.keys(data));
        let weather1 = document.querySelector(".weather");
        weather1.innerText = data.main.temp +" °C";
        document.querySelector(".wind").innerText = data.wind.speed +" Km/hr";
        document.querySelector(".humidity").innerText = data.main.humidity +" %"; 
        let image = document.querySelector("#image");
        let icon = data.weather[0].icon ;
        let imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png` ;
        image.src = imgUrl ;

    }catch(err){
        document.querySelector(".windSpeed").innerText = "City Not Found";
    }
}
let btn = document.querySelector("#show");
btn.addEventListener('click',showWeather)
