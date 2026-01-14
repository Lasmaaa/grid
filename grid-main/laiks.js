document.addEventListener("DOMContentLoaded", function() {
    fetchWeather();
});

function fetchWeather() {
    const lat = 57.3126;
    const lon = 25.2743;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Weather data:", data);

            const loc = `Cēsis, LV`;
            const temperature = data.current_weather?.temperature ?? "Nav datu";
            const weatherCode = data.current_weather?.weathercode ?? "";
            const conditions = getWeatherDescription(weatherCode);

            document.getElementById("location").innerText = loc;
            document.getElementById("temp").innerText = `Temperatūra: ${temperature} °C`;
            document.getElementById("conditions").innerText = `Laika apstākļi: ${conditions}`;
        })
        .catch(err => {
            console.error("Laika API kļūda:", err);
            document.getElementById("temp").innerText = "Laika dati nav pieejami";
        });
}

function getWeatherDescription(code) {
    const map = {
        0: "Skaidrs",
        1: "Vieglas mākoņainība",
        2: "Daļēji mākoņains",
        3: "Mākoņains",
        45: "Migla",
        48: "Migla ar salnu",
        51: "Viegli lietus pilieni",
        61: "Lietus",
        71: "Sniegs",
        95: "Pērkona negaiss"
    };
    return map[code] ?? "Nav definēts";
}
