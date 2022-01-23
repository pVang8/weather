

//fetch for default display has up coming 5 days and 3 hour forecast
// fetch('https://api.openweathermap.org/data/2.5/forecast?q=modesto&appid=beb82069579ce783ca0622097e57eb73')
// .then(response => response.json())
// .then(data => console.log(data))


let startT= document.getElementById('startT');
let midT= document.getElementById('midT');
let endT= document.getElementById('endT');
let mainTemp = document.getElementById('mainTemp');
let morn = 0;
let mid = 0;
let late = 0;
let main = 0;
let max = 0;
let min = 0;
let listTemp = [];

let number = [];

// make the function actually be a function 
//temp for 8am noon and 8pm
function oneCallAway(){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=37.661388&lon=-120.994446&exclude={part}&e59079bc9d41cb1df5042ed6f32b3463')
    .then(resp => resp.json())
    .then(data => {console.log(data);
        number = data.daily;
        morn = data.daily[0].temp.morn;
        mid = data.daily[0].temp.eve;
        late = data.daily[0].temp.night;
        main = data.current.temp;
        max = data.daily[0].temp.max;
        min = data.daily[0].temp.min;
        //move number to a list
        listTemp.push(morn,mid,late,main,max,min);

        const map1 = listTemp.map(x =>  (x - 273.15) * (9/5) + 32);
        // console.log(map1[0])
        startT.textContent= map1[0].toFixed(0) + "°";
        midT.textContent= map1[1].toFixed(0)+ "°";
        endT.textContent= map1[2].toFixed(0)+ "°";
        //current temp
        mainTemp.textContent= map1[3].toFixed(0)+ "°";
        //high and low for today
        highT.textContent= "H: "+ map1[4].toFixed(0)+ "°F";
        lowT.textContent= "L: "+map1[5].toFixed(0)+ "°F";
        //current temp
        mainTemp.textContent = ((data.current.temp - 273.15) * (9/5) + 32).toFixed(0) + "°F";
        //display cloudy
        

    })
}
oneCallAway();

// setTimeout(()=>{
//     number.map()

// },100)

