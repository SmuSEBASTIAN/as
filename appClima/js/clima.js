fetch("https://api.openweathermap.org/data/2.5/weather?q=Tucuman&units=metric&appid=96d53c539da0ed5e4efebb186bc8f01e")
    .then(response => response.json())
    .then(data => {
        console.log(data); // Imprime todo el objeto de respuesta en la consola
    })
    .catch(error => {
        console.error("Error:", error);
    });


    
