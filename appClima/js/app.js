const Btn = document.getElementById("Btn")
const Ciudad = document.getElementById("Ciudad");
const Clima = document.getElementById("Clima");
const Temp= document.getElementById("Temp");
const Max= document.getElementById("Max");
const Min= document.getElementById("min");
const Viento= document.getElementById("Viento");
const Humedad= document.getElementById("Humedad")
const imagen= document.getElementById("imagen");
const caja= document.getElementById("Caja")


Btn.addEventListener('click', (e) => {
    event.preventDefault(e)
    const APIKey= "96d53c539da0ed5e4efebb186bc8f01e"
    const Buscar = document.getElementById("Buscar").value
    if(Buscar ===" "){
        return;}
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Buscar}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if (json.cod === "404") {
            imagen.src= "./img/404.png"
            console.log("ERROR CAPO")
            caja.style.display="none"
            
            return;
        }
        caja.style.display="block"
         console.log("bien capo")
         Ciudad.innerHTML=`${json.name}, ${json.sys.country}`;
         Temp.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
         Max.innerHTML = `${parseInt(json.main.temp_max)}`;
         Min.innerHTML=`${parseInt(json.main.temp_min)}`
         Viento.innerHTML =`${parseInt(json.wind.speed)}Km/h`;
         Humedad.innerHTML=`${(json.main.humidity)}%`


         switch (json.weather[0].main) {
            case 'Clear':
                
                imagen.src = './img/clear.png';
                break;

            case 'Rain':
              
                imagen.src = 'img/rain.png';
                break;

            case 'Snow':
               
                imagen.src = "img/snow.png";
                break;

            case 'Clouds':
                
                imagen.src = 'img/cloud.png';
                break;

            case 'Haze':
               
                imagen.src = 'img/mist.png';
                break;

            default:
                imagen.src = 'img/world.gif';
        }
    })
})

/// xD
