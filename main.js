var canvas = document.getElementById("myCanvas");
var stateName = document.getElementById("state");
var start = document.getElementById("start");
var ctx = canvas.getContext('2d');
var bar = document.getElementById('bar');
var score = document.getElementById('point');
var img = new Image();
var check = 0;
var points = 0;
var startTime;
var x; 
var timeT;

start.addEventListener("click", startGame);
canvas.addEventListener('click', checkAnswer);

function startGame() {
    start.disabled = true;
    start.innerText = "Next";
    startTime = Date.now();
    check = 0;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    rState();
    x = setInterval(count, 1000);
}

function count() {
    var timeT = Date.now() - startTime +1;
    var timeSeconds = parseInt(timeT / 1000);
    if (timeSeconds < 10) {
        bar.innerText = timeSeconds + " s";
        bar.style.width = (timeSeconds * 10) + "%";
    } else if (timeSeconds == 10) {
        bar.innerText = timeSeconds + " s";
        bar.style.width = (timeSeconds * 10) + "%";
        clearInterval(x);
    }
}

function checkAnswer(event) {
    if (check == 0) {
        start.disabled = false;
        check = 1;
        var x_coordinate = event.pageX - canvas.offsetLeft;
        var y_coordinate = event.pageY - canvas.offsetTop;
        var pixelData = ctx.getImageData(x_coordinate, y_coordinate, 1, 1).data;
        console.log("rgb : (" + pixelData[0] +","+ pixelData[1] +","+ pixelData[2] + ")")
        clearInterval(x);

        if (pixelData[0] === 204 && pixelData[1] === 51 && pixelData[2] === 51 && stateName.innerText == "Jammu and Kashmir") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("J&K");
        }
        else if (pixelData[0] === 141 && pixelData[1] === 211 && pixelData[2] === 199 && stateName.innerText == "Ladakh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Ladakh");
            stateName.style.color = "#90EE90"

        }
        else if (pixelData[0] === 255 && pixelData[1] === 255 && pixelData[2] === 204 && stateName.innerText == "Himachal Pradesh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Himachal Pradesh");
            stateName.style.color = "#90EE90"

        }
        else if (pixelData[0] === 171 && pixelData[1] === 217 && pixelData[2] === 233 && stateName.innerText == "Punjab") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Punjab");
            stateName.style.color = "#90EE90"


        }
        else if (pixelData[0] === 29 && pixelData[1] === 145 && pixelData[2] === 192 && stateName.innerText == "Uttarakhand") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Uttarakhand");
        }
        else if (pixelData[0] === 153 && pixelData[1] === 112 && pixelData[2] === 171 && stateName.innerText == "Haryana") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Harayana");
        }
        else if (pixelData[0] === 33 && pixelData[1] === 102 && pixelData[2] === 172 && stateName.innerText == "Rajasthan") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Rajasthan");
            stateName.style.color = "#90EE90"

        }
        else if (pixelData[0] === 128 && pixelData[1] === 94 && pixelData[2] === 144 && stateName.innerText == "New Dehli") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"

            console.log("Dehli");
        }
        else if (pixelData[0] === 255 && pixelData[1] === 237 && pixelData[2] === 160 && stateName.innerText == "UP") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("UP");
        }
        else if (pixelData[0] === 136 && pixelData[1] === 65 && pixelData[2] === 157 && stateName.innerText == "Bihar") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Bihar");
        }
        else if (pixelData[0] === 189 && pixelData[1] === 0 && pixelData[2] === 38 && stateName.innerText == "Sikkim") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Sikkim");
        }
        else if (pixelData[0] === 29 && pixelData[1] === 105 && pixelData[2] === 150 && stateName.innerText == "West Bengal") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("West Bengal");
        }
        else if (pixelData[0] === 244 && pixelData[1] === 165 && pixelData[2] === 130 && stateName.innerText == "Jharkhand") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Jharkhand");
        }
        else if (pixelData[0] === 231 && pixelData[1] === 212 && pixelData[2] === 232 && stateName.innerText == "Odisha") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Odisha");
        }
        else if (pixelData[0] === 2 && pixelData[1] === 56 && pixelData[2] === 88 && stateName.innerText == "Chattishgarh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Chattishgarh");
        }
        else if (pixelData[0] === 255 && pixelData[1] === 255 && pixelData[2] === 51 && stateName.innerText == "Maharastra") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Maharastra");
        }
        else if (pixelData[0] === 166 && pixelData[1] === 189 && pixelData[2] === 219 && stateName.innerText == "Madhya Pradesh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90"
            console.log("Madhya Pradesh");
        }
        else if (pixelData[0] === 252 && pixelData[1] === 78 && pixelData[2] === 42 && stateName.innerText == "Telangana") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("Telangana");
        }
        else if (pixelData[0] === 178 && pixelData[1] === 223 && pixelData[2] === 138 && stateName.innerText == "Karnataka") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("Karnataka");
        }
        else if (pixelData[0] === 207 && pixelData[1] === 89 && pixelData[2] === 126 && stateName.innerText == "Goa") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("Goa");
        }
        else if (pixelData[0] === 251 && pixelData[1] === 154 && pixelData[2] === 153 && stateName.innerText == "Kerela") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("Kerela");
        }
        else if (pixelData[0] === 170 && pixelData[1] === 31 && pixelData[2] === 75 && stateName.innerText == "Tamil Nadu") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90"
            score.innerText = "Points :" + points;
            console.log("Tamil Nadu");
        }
        else if (pixelData[0] === 204 && pixelData[1] === 235 && pixelData[2] === 197 && stateName.innerText == "Andhra Pradesh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Andhra Pradesh");
            stateName.style.color = "#90EE90"
        }
        else if (pixelData[0] === 153 && pixelData[1] === 216 && pixelData[2] === 201 && stateName.innerText == "Assam") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            console.log("Assam");
            stateName.style.color = "#90EE90"
        }
        else if (pixelData[0] === 190 && pixelData[1] === 186 && pixelData[2] === 218 && stateName.innerText == "Arunachal Pradesh") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90";
            console.log("Arunachal Pradesh");
        }
        else if (pixelData[0] === 0 && pixelData[1] === 68 && pixelData[2] === 27 && stateName.innerText == "Nagaland") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90";
            console.log("Nagaland");
        }
        else if (pixelData[0] === 0 && pixelData[1] === 82 && pixelData[2] === 81 && stateName.innerText == "Manipur") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90";
            console.log("Manipur");
        }
        else if (pixelData[0] === 189 && pixelData[1] === 50 && pixelData[2] === 0  && stateName.innerText == "Tripura") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            stateName.style.color = "#90EE90";
            score.innerText = "Points :" + points;
            console.log("Tripua");
        }
        else if (pixelData[0] === 118 && pixelData[1] === 42 && pixelData[2] === 131  && stateName.innerText == "Mizoram") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90";
            console.log("Mizoram");
        }

        else if (pixelData[0] === 247 && pixelData[1] === 129 && pixelData[2] === 191 && stateName.innerText == "Meghalaya") {
            addPoints = parseInt( 1000-((Date.now()-startTime)/10));
            console.log(addPoints);
            points = points +  addPoints;
            score.innerText = "Points :" + points;
            stateName.style.color = "#90EE90";
            console.log("Meghalaya");
        }
        
        else{
            stateName.style.color = "#f43b3b";
        }
        
    }
}

function rState() {
    stateName.style.color = "#E0CCBE";
    randomNo = Math.floor(Math.random() * states.length);
    console.log(randomNo);
    stateName.innerText = states[randomNo];
}

// Initialization
img.src = 'india.png';
states = ["Jammu and Kashmir" , "Ladakh" , "Uttarakhand" , "Himachal Pradesh" , "Punjab" , "Haryana" ,
 "Bihar" , "UP" ,  "New Dehli", "Karnataka" , "Telangana" , "Kerela","Rajasthan", "Goa" , "Nagaland" ,
  "Tripura" , "Meghalaya" , "Manipur" , "Arunachal Pradesh", "Tamil Nadu" ,"Chattishgarh", "West Bengal" ,
  "Maharastra" , "Sikkim", "Jharkhand" ,"Madhya Pradesh" ,  "Assam" ]

canvas.height = (img.height - ((85 / 100) * img.height));
canvas.width = (img.width - ((85 / 100) * img.width));
