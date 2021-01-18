fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e2b4e5694730290e30381ae07f24f2e8')
    .then(response => console.log(response))