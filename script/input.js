// import { allFive } from "./default.js";


let inputBtn = document.getElementById('inputBtn');
let inputBox = document.getElementById('inputBox');
let hTmp1 =document.getElementById('hTmp1');
let lTmp1 =document.getElementById('lTmp1');
let base = [];
let morn = 0;
let mid = 0;
let late = 0;
let main = 0;
let max = 0;
let min = 0;
let listTemp =[];


inputBtn.addEventListener('click', function(e){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputBox.value}&appid=beb82069579ce783ca0622097e57eb73`)
    .then(response => response.json())
    .then(data => {console.log(data);
    
    
        nText.textContent = data.city.name;
        let late = data.city.coord.lat;
        let long = data.city.coord.lon;
        
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${late}&lon=${long}&exclude={part}&appid=e59079bc9d41cb1df5042ed6f32b3463`)
        .then(resp => resp.json())
        .then(data =>{console.log(data);
            base = data.daily;
        morn = base[0].temp.morn;
        mid = base[0].temp.eve;
        late = base[0].temp.night;
        main = data.current.temp;
        max = base[0].temp.max;
        min = base[0].temp.min;
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
        weatherTxt.textContent = data.daily[0].weather[0].main;
            
            allFive();
            
            
        
        
        })
    
    })
})

function allFive(){
    for (let i = 0; i < 5; i++) {
        if (i==0){
            
            hTmp1.textContent = ((base[0].temp.max - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            lTmp1.textContent = ((base[0].temp.min - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            
        }
        else if (i==1){
            
            hTmp2.textContent = ((base[1].temp.max - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            lTmp2.textContent = ((base[1].temp.min - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            
        }
        else if (i==2){
            
            hTmp3.textContent = ((base[2].temp.max - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            lTmp3.textContent = ((base[2].temp.min - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            
        }
        else if (i==3){
            
            hTmp4.textContent = ((base[3].temp.max - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            lTmp4.textContent = ((base[3].temp.min - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            
        }
        else if (i==4){
            
            hTmp5.textContent = ((base[4].temp.max - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            lTmp5.textContent = ((base[4].temp.min - 273.15) * (9/5) + 32).toFixed(0) + "°F";
            
        }
        
    }
}