
//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "Singularly Funny Forms and Functions (FaF)";
    var game2Title = get("answerTwo").innerHTML = "Pleasantly Plural FaF!";
    var game3Title = get("answerThree").innerHTML = "Are You Ready to Mix it Up!";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "NounShuffle";}

function gameTitle() {get("startButton").innerHTML = "Let's Clown Around with Nouns!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();



//Here specific data are loaded

var nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"], ["agricol", "farmer"]];

var nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["agricol", "farmers"]];

//var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];


var perEndingsFirst = [["a", "the (Subject) "], ["ae (genitive)", "of the "], ["ae (dative)", "to/for the "], ["am", "the (Direct Object) "], ["ā", "with the "], ["a!", "Oh, "]];

var perEndingsFirstPlural = [["ae", "the (Subject) "], ["ārum", "of the "], ["īs (dative)", "to/for the "], ["ās", "the (Direct Object) "], ["īs", "with the "], ["ae!", "Oh, "]];

//var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

//var perEndingsFirstPerfect = [["ī", "I "], ["isti", "You "], ["it", "She/he/it "], ["imus", "We "], ["istis", "Ya'll "], ["ērunt", "They "]];

var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];





//Random index for Shuffle
	 var randomIndex = 0;


//This declares a function for the audio files which are embodied in the Body
function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

     

//Function for adding and subtracting points based on correct or wrong answers

    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions to be asked for each game

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variable set for 15 seconds
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){firstDeclensionNounShuffle()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){firstDeclensionPluralNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){allFirstDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){verbShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }









function firstDeclensionNounShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
//shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);





function shuffleFirstDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + nounsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + nounsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + nounsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + nounsFirst[0][1]  ;
}


 shuffleFirstDeclensionNouns();




	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;

		  
    }



}












function firstDeclensionPluralNounShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirstPlural);
//shuffle(verbsFirstPer);

shuffle(perEndingsFirstPlural);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);






function shuffleFirstDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsFirstPlural[0][0]  + perEndingsFirstPlural[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPlural[1][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPlural[2][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPlural[3][1] + nounsFirstPlural[0][1]  ;
}

shuffleFirstDeclensionPluralNouns();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;




 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}





function allFirstDeclensionNounShuffle(){


countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(perEndingsFirst);

shuffle(nounsFirstPlural);
shuffle(perEndingsFirstPlural);



shuffle(answers);





function shuffleFirstDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + nounsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + nounsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + nounsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + nounsFirst[0][1]  ;
}



function shuffleFirstDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsFirstPlural[0][0]  + perEndingsFirstPlural[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPlural[1][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPlural[2][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPlural[3][1] + nounsFirstPlural[0][1]  ;
}


var randomNounIndex = Math.floor(Math.random() * 2);
var mixUp = [shuffleFirstDeclensionNouns, shuffleFirstDeclensionPluralNouns];

mixUp[randomNounIndex]();








	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;

		  
    }



}












   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == perEndingsFirst[0][1] + nounsFirst[0][1] ||
		document.getElementById("answerOne").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == perEndingsFirst[0][1] + nounsFirst[0][1]||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == perEndingsFirst[0][1] + nounsFirst[0][1]||
		document.getElementById("answerThree").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (document.getElementById("answerFour").innerHTML == perEndingsFirst[0][1] + nounsFirst[0][1]||
		document.getElementById("answerFour").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
