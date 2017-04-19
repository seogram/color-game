
//****************Initialisation***************************
var colors = generateRandomColor(6);
var pickedColor=pickcolor();
//****************Define Variables*************************
var plate = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var jumbo = document.querySelector(".jumbotron");
var pickedColorDisplay = document.getElementById("pickedColorDisplay");

//***************Display Picked Color *********************
pickedColorDisplay.textContent=pickedColor;

//************* Display Randomized colors *****************
displayColor(6);

//************ Reset Button event **************
reset.addEventListener("click",resetColor);

//******* easy level ***********
easy.addEventListener("click",function(){
  hard.classList.remove("selected");
  easy.classList.add("selected");
  h1.style.background="transparent";
    jumbo.style.setProperty ("background", "blue", "important");
  displayColorReset();
  colors =generateRandomColor(3);
  pickedColor=pickcolor();
  pickedColorDisplay.textContent=pickedColor;

  displayColor(3);

});
//******** Hard Level ***********
hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  h1.style.background="transparent";
  jumbo.style.setProperty ("background", "blue", "important");
  displayColorReset();
  colors = generateRandomColor(6);
  pickedColor=pickcolor();
  pickedColorDisplay.textContent=pickedColor;
  displayColor(6);

});

//************* Color Display function*************
function displayColor(num){
  for(var i=0 ; i < num;i++){
    plate[i].style.display="block";
    plate[i].style.background=colors[i];
    plate[i].addEventListener("click",function(){
    var bgColor=this.style.background;
    if(bgColor===pickedColor){
    jumbo.style.setProperty ("background", bgColor, "important");
    message.textContent="Correct";
    reset.innerHTML="New Game";
        }
        else{
    message.textContent="Wrong , Try again !";
    reset.innerHTML="Reset Colors";
    this.style.background="#232323";
       }
  })
  }
}

function displayColorReset(){
  for (var j =0 ; j < plate.length;j++){
    plate[j].style.display="none";

  }
}

//***** Picked color function *************
function pickcolor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

//********* Generate Random Color function ********
function generateRandomColor(num){
  var colors = [];
  for(var i=0 ; i<num;i++){
  colors.push(randomColor());
  }
  return colors;
}

//******* Random RGB generator *********
function randomColor() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var randomColor = "rgb("+r+","+" "+g+","+" "+b+")";
  return randomColor;
}

//*****Reset Button function ***********
function resetColor(){
  colors= generateRandomColor(6);
  pickedColor=pickcolor();
  pickedColorDisplay.textContent=pickedColor;
  h1.style.background="transparent";
  jumbo.style.setProperty ("background", "blue", "important");
  displayColor(6);
}
