async function getWeather (){
    const city = document.getElementById("cityInput").value .trim();
    const resultDiv = document.getElementById("weatherResult");

    if (!city){
        resultDiv.innerHTML = "! Please enter a city name";
        return;
    }

    const apiKey = "63fe5885b9b29f1b1f0345b83d83d586";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    resultDiv.innerHTML = "Loading.....";

    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error("City name not found");

        const data = await response.json();

        const weather = `🏙️ City: ${data.name} <br>
        🌡️ Temperature : ${data.main.temp}°c <br>
        🌥️ Weather : ${data.weather[0].main} <br>
        🍃 Wind: ${data.wind.speed} km/h`;
        resultDiv.innerHTML = weather;
    }catch (error) {
        resultDiv.innerHTML = "❌ Error:"+ error.message;

    }
}