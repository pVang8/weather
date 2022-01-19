fetch('api.openweathermap.org/data/2.5/forecast?q=modesto&appid=beb82069579ce783ca0622097e57eb73')
.then(response => response.text())
.then(data => console.log(data))