/* <img src="./image/heart.png" id="heart" class="heart" alt="heart logo">  */



function createwhiteHeart(){
    var img = document.createElement();
    img.src = "./image/whiteHeart.png";
    img.class= "heart";
    img.alt =" white heart logo";
}
function makeHeart(){
    var img = document.createElement();
    img.src = "./image/heart.png";
    img.class= "heart";
    img.alt ="heart logo";
}

export {makeHeart, createwhiteHeart };