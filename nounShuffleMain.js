
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
    var game2Title = get("answerTwo").innerHTML = "Are you Ready to Mix it Up!";
    var game3Title = get("answerThree").innerHTML = "I want Seconds and Thirds!";
    var game4Title = get("answerFour").innerHTML = "Studio 54!";


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

var nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"], ["agricol", "farmer"],["fam", "rumor"], ["fortun", "fortune"], ["naut", "sailor"], ["pecuni", "money"],["poet", "poet"], ["sententi", "opinion"], ["form", "form"],["ir", "anger"], ["patri", "country"], ["port", "gate"],["ros", "rose"], ["vit", "life"]];

var nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["agricol", "farmers"],["fam", "rumors"], ["fortun", "fortunes"], ["naut", "sailors"], ["pecuni", "monies"],["poet", "poets"], ["sententi", "opinions"], ["form", "forms"],["ir", "angers"], ["patri", "countries"], ["port", "gates"],["ros", "roses"], ["vit", "lives"]];

//var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];


var perEndingsFirst = [["a", "the (Subject) "], ["ae (Genitive)", "of the "], ["ae (Dative)", "to/for the "], ["am", "the (Direct Object) "], ["ā", "by/with/in/from the "], ["a!", "Oh, "]];

var perEndingsFirstPlural = [["ae", "the (Subject) "], ["ārum", "of the "], ["īs (Dative)", "to/for the "], ["ās", "the (Direct Object) "], ["īs (Ablative)", "by/with/in/from the "], ["ae!", "Oh, "]];

//var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

//var perEndingsFirstPerfect = [["ī", "I "], ["isti", "You "], ["it", "She/he/it "], ["imus", "We "], ["istis", "Ya'll "], ["ērunt", "They "]];
var nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];

var perEndingsSecond = [["us", "the (Subject) "], ["ī (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["e!", "Oh, "]];

var nounsSecondIus = [["argentari", "banker"], ["nunti", "messenger"], ["fili", "son"],["venalici", "slave dealer"]];
var nounsSecondEr = [["puer", "puer", "boy"], ["liber", "libr", "book"], ["magister", "magistr", "teacher"],["vir", "vir","man"]];
var perEndingsSecondIusEr = [["us", "the (Subject) "], ["i (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["!", "Oh, "]];

var nounsSecondPlural = [["serv", "servants"], ["hort", "gardens"], ["lect", "couches"], ["argentari", "bankers"], ["coqu", "cooks"], ["cerv", "deer"],["cib", "food"], ["anul", "rings"], ["nunti", "messengers"], ["fili", "sons"],["domin", "masters"], ["venalici", "slave dealers"], ["candidat", "candidates"],["lup", "wolves"]];
var perEndingsSecondPlural = [["ī", "the (Subject) "], ["ōrum ", "of the "], ["īs (dative)", "to/for the "], ["ōs", "the (Direct Object) "], ["īs (ablative)", "by/with/in/from the "], ["ī!", "Oh, "]];

var nounsThird = [["reg", "king"], ["pac", "peace"],["labor", "work"], ["homin", "man"], ["virtut", "virtue"], ["civitat", "state"], ["can", "dog"], ["mercator", "merchant"], ["patr", "father"], ["matr", "mother"]];
var nounsThirdPlural = [["reg", "kings"], ["leg", "laws"],["labor", "works"], ["homin", "men"], ["virtut", "virtues"], ["civitat", "states"], ["can", "dogs"], ["mercator", "merchants"], ["patr", "fathers"], ["matr", "mothers"]];

var perEndingsThird = [["is", "of the "], ["ī ", "to/for the "], ["em", "the "], ["e", "by/with/in/from the "]];
var perEndingsThirdPlural = [["ēs (Subject)", "the "], ["um", "of the "], ["ibus (Dative)", "to/for the "], ["ēs (Direct Object)", "the (Direct Object) "], ["ibus (Ablative)", "by/with/in/from the "]];

var nounsFourth = [["port", "harbor"], ["man", "hand"],["senat", "senate"], ["impet", "attack"]];
var nounsFourthPlural = [["port", "harbors"], ["man", "hands"],["senat", "senates"], ["impet", "attacks"]];

var perEndingsFourth = [["us", "the (Subject) "],["ūs", "of the "], ["uī ", "to/for the "], ["um", "the (Direct Object) "], ["ū", "by/with/in/from the "]];
var perEndingsFourthPlural = [["ūs (Subject)", "the "], ["uum", "of the "], ["ibus (Dative)", "to/for the "], ["ūs (Direct Object)", "the (Direct Object) "], ["ibus (Ablative)", "by/with/in/from the "]];

var nounsFifth = [["r", "thing"], ["effigi", "image"],["aci", "line of battle"], ["sp", "hope"], ["dī", "day"]];
var nounsFifthPlural = [["r", "things"], ["effigi", "images"],["aci", "lines of battle"], ["sp", "hopes"], ["dī", "days"]];

var perEndingsFifth = [["ēs", "the (Subject) "],["ēī (Genitive)", "of the "], ["ēī (Dative)", "to/for the "], ["em", "the (Direct Object) "], ["ē", "by/with/in/from the "]];
var perEndingsFifthPlural = [["ēs (Subject)", "the "], ["ērum", "of the "], ["ēbus (Dative) ", "to/for the "], ["ēs (Direct Object)", "the (Direct Object) "], ["ēbus (Ablative)", "by/with/in/from the "]];


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
 	startButton.onclick = function(){allFirstDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){allSecondDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){studio54Shuffle()};
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
document.getElementById("startButton").innerHTML =  nounsFirst[0][0]  + perEndingsFirst[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + nounsFirst[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + nounsFirst[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + nounsFirst[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + nounsFirst[0][1];
}



function shuffleFirstDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsFirstPlural[0][0]  + perEndingsFirstPlural[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1] + " ";


document.getElementById(answers[1]).innerHTML = perEndingsFirstPlural[1][1] + nounsFirstPlural[0][1] + " ";

document.getElementById(answers[2]).innerHTML = perEndingsFirstPlural[2][1] + nounsFirstPlural[0][1] + " ";

document.getElementById(answers[3]).innerHTML = perEndingsFirstPlural[3][1] + nounsFirstPlural[0][1] + " ";
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




function allSecondDeclensionNounShuffle(){


countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;

shuffle(nounsSecondIus);
shuffle(perEndingsSecondIusEr);

shuffle(nounsSecond);
shuffle(perEndingsSecond);
//shuffle(nounsFirst);
//shuffle(perEndingsFirst);

shuffle(nounsSecondPlural);
shuffle(perEndingsSecondPlural);

shuffle(nounsThird);
shuffle(perEndingsThird);

shuffle(nounsThirdPlural);
shuffle(perEndingsThirdPlural);



shuffle(answers);





function shuffleSecondDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsSecond[0][0]  + perEndingsSecond[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecond[0][1] + nounsSecond[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecond[1][1] + nounsSecond[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecond[2][1] + nounsSecond[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecond[3][1] + nounsSecond[0][1];
}



function shuffleSecondDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsSecondPlural[0][0]  + perEndingsSecondPlural[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecondPlural[1][1] + nounsSecondPlural[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecondPlural[2][1] + nounsSecondPlural[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecondPlural[3][1] + nounsSecondPlural[0][1];
}


function shuffleSecondDeclensionNounsIus(){
document.getElementById("startButton").innerHTML =  nounsSecondIus[0][0]  + perEndingsSecondIusEr[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecondIusEr[1][1] + nounsSecondIus[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecondIusEr[2][1] + nounsSecondIus[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecondIusEr[3][1] + nounsSecondIus[0][1];
}

function shuffleThirdDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsThird[0][0]  + perEndingsThird[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsThird[0][1] + nounsThird[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsThird[1][1] + nounsThird[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsThird[2][1] + nounsThird[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsThird[3][1] + nounsThird[0][1];
}

function shuffleThirdDeclensionNounsPlural(){
document.getElementById("startButton").innerHTML =  nounsThirdPlural[0][0]  + perEndingsThirdPlural[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsThirdPlural[0][1] + nounsThirdPlural[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsThirdPlural[1][1] + nounsThirdPlural[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsThirdPlural[2][1] + nounsThirdPlural[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsThirdPlural[3][1] + nounsThirdPlural[0][1];
}

var randomNounIndex = Math.floor(Math.random() * 5);
var mixUp = [shuffleSecondDeclensionNouns,shuffleSecondDeclensionPluralNouns,shuffleSecondDeclensionNounsIus,shuffleThirdDeclensionNouns,shuffleThirdDeclensionNounsPlural];

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


function studio54Shuffle(){


countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;

shuffle(nounsFourth);
shuffle(perEndingsFourth);
shuffle(nounsFourthPlural);
shuffle(perEndingsFourthPlural);
//shuffle(perEndingsSecond);
//shuffle(nounsFirst);
//shuffle(perEndingsFirst);

shuffle(nounsFifth);
shuffle(perEndingsFifth);
shuffle(nounsFifthPlural);
shuffle(perEndingsFifthPlural);

//shuffle(perEndingsThird);

shuffle(answers);





function shuffleFourthDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsFourth[0][0]  + perEndingsFourth[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFourth[0][1] + nounsFourth[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFourth[1][1] + nounsFourth[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFourth[2][1] + nounsFourth[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFourth[3][1] + nounsFourth[0][1];
}


function shuffleFourthDeclensionNounsPlural(){
document.getElementById("startButton").innerHTML =  nounsFourthPlural[0][0]  + perEndingsFourthPlural[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFourthPlural[0][1] + nounsFourthPlural[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFourthPlural[1][1] + nounsFourthPlural[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFourthPlural[2][1] + nounsFourthPlural[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFourthPlural[3][1] + nounsFourthPlural[0][1];
}

function shuffleFifthDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsFifth[0][0]  + perEndingsFifth[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFifth[0][1] + nounsFifth[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFifth[1][1] + nounsFifth[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFifth[2][1] + nounsFifth[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFifth[3][1] + nounsFifth[0][1];
}

function shuffleFifthDeclensionNounsPlural(){
document.getElementById("startButton").innerHTML =  nounsFifthPlural[0][0]  + perEndingsFifthPlural[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFifthPlural[0][1] + nounsFifthPlural[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFifthPlural[1][1] + nounsFifthPlural[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFifthPlural[2][1] + nounsFifthPlural[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFifthPlural[3][1] + nounsFifthPlural[0][1];
}


var random45Index = Math.floor(Math.random() * 4);
var mixUp = [shuffleFourthDeclensionNouns,shuffleFourthDeclensionNounsPlural, shuffleFifthDeclensionNouns,shuffleFifthDeclensionNounsPlural];

mixUp[random45Index]();








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
    document.getElementById("answerOne").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]||
		document.getElementById("answerOne").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]+ " "||
    document.getElementById("answerOne").innerHTML == perEndingsSecond[0][1] + nounsSecond[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsThird[0][1] + nounsThird[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsThirdPlural[0][1] + nounsThirdPlural[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsFourth[0][1] + nounsFourth[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsFourthPlural[0][1] + nounsFourthPlural[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsFifth[0][1] + nounsFifth[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsFifthPlural[0][1] + nounsFifthPlural[0][1]
  ){

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
    document.getElementById("answerTwo").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]+ " "||
    document.getElementById("answerTwo").innerHTML == perEndingsSecond[0][1] + nounsSecond[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsThird[0][1] + nounsThird[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsThirdPlural[0][1] + nounsThirdPlural[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsFourth[0][1] + nounsFourth[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsFourthPlural[0][1] + nounsFourthPlural[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsFifth[0][1] + nounsFifth[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsFifthPlural[0][1] + nounsFifthPlural[0][1]
  ){

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
    document.getElementById("answerThree").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]||
		document.getElementById("answerThree").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1] + " "||
    document.getElementById("answerThree").innerHTML == perEndingsSecond[0][1] + nounsSecond[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsThird[0][1] + nounsThird[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsThirdPlural[0][1] + nounsThirdPlural[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsFourth[0][1] + nounsFourth[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsFourthPlural[0][1] + nounsFourthPlural[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsFifth[0][1] + nounsFifth[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsFifthPlural[0][1] + nounsFifthPlural[0][1]
  ){

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
    document.getElementById("answerFour").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]||
		document.getElementById("answerFour").innerHTML == perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1] + " "||
    document.getElementById("answerFour").innerHTML == perEndingsSecond[0][1] + nounsSecond[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsThird[0][1] + nounsThird[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsThirdPlural[0][1] + nounsThirdPlural[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsFourth[0][1] + nounsFourth[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsFourthPlural[0][1] + nounsFourthPlural[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsFifth[0][1] + nounsFifth[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsFifthPlural[0][1] + nounsFifthPlural[0][1]
  ){

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
