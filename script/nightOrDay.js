let result = document.getElementById('result')

let hero = document.getElementById('hero');
let nav = document.getElementById('nav');
let navFont = document.getElementById('navFont');
let inputBox = document.getElementById('inputBox');
let firstCard = document.getElementById('firstCard');
let heart = document.getElementById("heart");
let mainTemp = document.getElementById("mainTemp");
let hDot = document.getElementById("hDot");
let hDot2 = document.getElementById("hDot2");
let time = document.getElementById('time');
let secCard = document.getElementById('secCard');
let weatherTxt = document.getElementById('weatherTxt');
let highT = document.getElementById('highT');
let lowT = document.getElementById('lowT');
let toDay = document.getElementById('toDay');
let timeTitle = document.getElementById('timeTitle');
let timeTitle2 = document.getElementById('timeTitle2');
let timeTitle3 = document.getElementById('timeTitle3');
let vDot1 = document.getElementById('vDot1');
let vDot2 = document.getElementById('vDot2');
let startT = document.getElementById('startT');
let midT = document.getElementById('midT');
let endT = document.getElementById('endT');
let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let day3 = document.getElementById('day3');
let day4 = document.getElementById('day4');
let day5 = document.getElementById('day5');

let dayOne = document.getElementById('dayOne');
let dayTwo = document.getElementById('dayTwo');
let dayThree = document.getElementById('dayThree');
let dayFour = document.getElementById('dayFour');
let dayFive= document.getElementById('dayFive');

let hTmp1= document.getElementById('hTmp1');
let hTmp2= document.getElementById('hTmp2');
let hTmp3= document.getElementById('hTmp3');
let hTmp4= document.getElementById('hTmp4');
let hTmp5= document.getElementById('hTmp5');

let lTmp1= document.getElementById('lTmp1');
let lTmp2= document.getElementById('lTmp2');
let lTmp3= document.getElementById('lTmp3');
let lTmp4= document.getElementById('lTmp4');
let lTmp5= document.getElementById('lTmp5');

let border1 = document.getElementById('border1');
let dayOneTextD = document.getElementById('dayOneTextD');
let dayTwoTextD = document.getElementById('dayTwoTextD');
let dayThreeTextD = document.getElementById('dayThreeTextD');
let dayFourTextD = document.getElementById('dayFourTextD');
let dayFiveTextD = document.getElementById('dayFiveTextD');
let favBtn = document.getElementById('favBtn');
let favHeart = document.getElementById('favHeart');
let favText = document.getElementById('favText')






function setDayOrNight(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=modesto&appid=beb82069579ce783ca0622097e57eb73')
  .then(response => response.json())
  .then(data => {console.log(data);
          result = data.list[0].sys.pod
          console.log(result);
          //night
          if(result == "n")
          {
            console.log(result);
            hero.className = "container-fluid nightHeroImage";
            nav.className = "row nightNavBar text-center";
            navFont.className ="nightNavFont";
            inputBox.className="nightInputBox";
            firstCard.className ="card nightCard";
            nText.className = "nightText";
            document.write
            
            
            mainTemp.className="nightTextMain";
            hDot.className ="nightHr noMnoP";
            hDot2.className ="nightHr noMnoP";
            time.className = 'd-flex justify-content-end nightText';
            secCard.className= 'card nightCard';
            weatherTxt.className = 'nightPhiloTxt';
            highT.className = 'nightPhiloTxt';
            lowT.className = 'nightPhiloTxt';
            toDay.className = 'nightText';
            timeTitle.className ='text-center nightText';
            timeTitle2.className ='text-center nightText';
            timeTitle3.className ='text-center nightText';
            vDot1.className='col-1 nightLVDot';
            vDot2.className='col-1 nightRVDot';
            startT.className='text-center secCardTemp mt-3 nightText';
            midT.className='text-center secCardTemp mt-3 nightText';
            endT.className='text-center secCardTemp mt-3 nightText';
            day1.className ='card nightFiveForecast';
            day2.className ='card nightFiveForecast';
            day3.className ='card nightFiveForecast';
            day4.className ='card nightFiveForecast';
            day5.className ='card nightFiveForecast';
            dayOne.className ='text-center nightText mt-1';
            dayOneTextD.className = 'd-flex justify-content-center mt-2 nightText';
            dayTwoTextD.className = 'd-flex justify-content-center mt-2 nightText';
            dayThreeTextD.className = 'd-flex justify-content-center mt-2 nightText';
            dayFourTextD.className = 'd-flex justify-content-center mt-2 nightText';
            dayFiveTextD.className = 'd-flex justify-content-center mt-2 nightText';
            dayTwo.className ="text-center nightText mt-1";
            dayThree.className ="text-center nightText mt-1";
            dayFour.className ="text-center nightText mt-1";
            dayFive.className ="text-center nightText mt-1";
            favBtn.className ='btn  text-center btnNight nightFavLBtn';
            heart.className = 'whiteHeart';
            favHeart.className ='anotherWhiteHeart img-fluid text-center';
            favText.className ='nightText5';

          }
          //day
          else if(result =="d")
          {
            console.log(result);
            hero.className = "container-fluid dayHeroImage";
            nav.className = "row dayNavBar text-center";
            navFont.className ="dayNavFont";
            inputBox.className="inputBox";
            firstCard.className ="card dayCard";
            nText.className = "dayText";
           
           
            mainTemp.className="dayMainTemp";
            hDot.className ="dayHr noMnoP";
            hDot2.className ="dayHr noMnoP";
            time.className ='d-flex justify-content-end dayText';
            secCard.className= 'card dayCard';
            weatherTxt.className = 'dayPhiloText';
            highT.className = 'dayPhiloText';
            lowT.className = 'dayPhiloText';
            toDay.className = 'dayText';
            timeTitle.className ='text-center dayText';
            timeTitle2.className ='text-center dayText';
            timeTitle3.className ='text-center dayText';
            vDot1.className='col-1 dayLVDot';
            vDot2.className='col-1 dayRVDot';
            startT.className='text-center secCardTemp mt-3 dayPhiloText2';
            midT.className='text-center secCardTemp mt-3 dayPhiloText2';
            endT.className='text-center secCardTemp mt-3 dayPhiloText2';
            day1.className ='card dayFiveForecast';
            day2.className ='card dayFiveForecast';
            day3.className ='card dayFiveForecast';
            day4.className ='card dayFiveForecast';
            day5.className ='card dayFiveForecast';
            dayOne.className ='text-center mt-1';
            dayOneTextD.className = 'd-flex justify-content-center mt-2 ';
            dayTwoTextD.className = 'd-flex justify-content-center mt-2 ';
            dayThreeTextD.className = 'd-flex justify-content-center mt-2 ';
            dayFourTextD.className = 'd-flex justify-content-center mt-2 ';
            dayFiveTextD.className = 'd-flex justify-content-center mt-2 ';
            dayTwo.className ="text-center mt-1";
            dayThree.className ="text-center mt-1";
            dayFour.className ="text-center mt-1";
            dayFive.className ="text-center mt-1";
            favBtn.className ='btn btn-light text-center dayFavLBtn';
            heart.className='heart';
            favHeart.className ='greyHeart img-fluid text-center';
            favText.className ='dayText5';
          }
          
  
  })
}
setDayOrNight();


