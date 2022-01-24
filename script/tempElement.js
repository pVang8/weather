
// // function createDayLongCard(){

// // }













// function createNightLongCard(){

// //creating first col
// let firstCol = document.createElement('div');
// firstCol.className ='col-6 nightText mt-4';    
    
// let h4 = document.createElement('h4');
// h4.textContent='Wednesday';

// let dateDiv = document.createElement('div');
// dateDiv.id ="hDot2";

// let h5 = document.createElement('h5');
// h5.textContent = 'Cloudy';





// //create second col
// let secCol = document.createElement('div');
// secCol.className ='col-2 nightText mt-4';

// //element in second col
// let firstP = document.createElement('p');
// firstP.className='noM text-center';

// let img = document.createElement('img');
// img.className = "noM";
// img.height="55px";
// img.scr="./image/sunny.png";
// img.alt="Sun Logo";

// let secP = document.createElement('p');
// secP.className= "noM text-center";
// secP.textContent= '37°';




// //create third col
// let thirdCol = document.createElement('div');
// thirdCol.className ='col-2 test1 nightText text-center  mt-4';

// let thirdP = document.createElement('p');
// thirdP.className= "noM text-center";
// thirdP.textContent= 'noon';

// let img2 = document.createElement('img');
// img2.className = "noM";
// img2.height="55px";
// img2.scr="./image/cloudy.png";
// img2.alt="Cloudy Logo";

// let fourP = document.createElement('p');
// fourP.className= "noM text-center";
// fourP.textContent= '37°';



// //fourth col
// let fourCol = document.createElement('div');
// fourCol.className ="col-2 test1 nightText text-center  mt-4";

// let fifP = document.createElement('p');
// fifP.className= "noMoo text-center";
// fifP.textContent= '8pm';

// let img3 = document.createElement('img');
// img3.className = "noMoo moonL";
// img3.height="40px";
// img3.scr="./image/night.png";
// img3.alt="Moon Logo";

// let sixP = document.createElement('p');
// sixP.className= "noMoo text-center mooText";
// sixP.textContent= '37°';

// //build first col
// firstCol.appendChild(h4);
// firstCol.appendChild(dateDiv);
// firstCol.appendChild(h5);

// //build secon col
// secCol.appendChild(firstP);
// secCol.appendChild(img);
// secCol.appendChild(secP);

// //build third col
// thirdCol.appendChild(thirdP);
// thirdCol.appendChild(img2);
// thirdCol.appendChild(fourP);

// //build fourth col
// fourCol.appendChild(fifP);
// fourCol.appendChild(img3);
// fourCol.appendChild(sixP);

// row.appendChild(firstCol);
// row.appendChild(secCol);
// row.appendChild(thirdCol);
// row.appendChild(fourCol);

// card.appendChild(row);

// //row

// let row = document.createElement('div');
// row.className= 'row';

// //outer layer
// let card = document.createElement('div');
// card.className='card nightLongCard mt-2';
// }


// let injectHere = document.getElementById('injectHere');


// let day1 = document.getElementById('day1');
// let day2 = document.getElementById('day2');
// let day3 = document.getElementById('day3');
// let day4 = document.getElementById('day4');
// let day5 = document.getElementById('day5');


// day1.addEventListener('click', function(e){
//     createNightLongCard();
// });
// day2.addEventListener('click', function(e){

// });
// day3.addEventListener('click', function(e){

// });
// day4.addEventListener('click', function(e){

// });
// day5.addEventListener('click', function(e){

// });


































// function setDayOrNight(){
//   fetch('https://api.openweathermap.org/data/2.5/forecast?q=modesto&appid=beb82069579ce783ca0622097e57eb73')
//   .then(response => response.json())
//   .then(data => {
//     // console.log(data);
//           result = data.list[0].sys.pod;})
//           //night
//           if(result == "n"){
                // createNightLongCard();
//           }
//           else if(result == 'd'){
                    // createDayLongCard();
//           }
//   }

// let newElement = document.createElement('div')
// document.span.appendChild(newElement);