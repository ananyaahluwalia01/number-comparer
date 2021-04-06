//Ask for their username so that you can refer to it while addressing the user, If they enter in nothing, then it will loop and ask them again (the same will happen if they click cancel) 
var userName = prompt("What is your name?");
  
  while(userName === "" || userName === null){
    userName = prompt("What is your name?");
  }

//2 variables which indicate the level you are on, and the score you have.  
var userScore = 0;
var level = 1;

//introduce the user and give them instructions  
alert("Welcome to Comparer " + userName + "! \nIn this game you will be given 2 numbers and you will have to choose the bigger/smaller one (it will specify which in the question). There will be 2 levels and you have to get 3 points to pass a level. Good luck and I hope you have fun!");

  //this loop is the whole game. It is where the questions are asked and basically where the whole game lies.
  //whenever the score is less that 3, it goes through this loop, but when the score first reaches 3, it is reset back to 0, as shown below, this means that the loop will go on for 2 sets (or 2 levels)  
  while (userScore < 3){ 
    
    //the code below only applies to level 1, so the numbers are all small (100 or less). To choose the numbers I have used an inbuilt function called math random, which will choose any number between 0 and the number the function is multiplied with, which in this case, is 100. The math ceil function rounds that number up to the nearest whole number, meaning that 0 will not be counted, but 100 will.
    if(level == 1){
      var numberOne = Math.ceil(Math.random() * 100);
      var numberTwo = Math.ceil(Math.random() * 100); 

        //This loop ensures that both the numbers will not be the same.
        while(numberOne == numberTwo){
          var numberOne = Math.ceil(Math.random() * 100);
          var numberTwo = Math.ceil(Math.random() * 100);
        }
    
    //the code below only applies to level 2, so the numbers are larger (1000 or less). To choose the numbers I have again used an inbuilt function called math random, which will choose any number between 0 and the number the function is multiplied with, which in this case, is 1000. The math ceil function rounds that number up to the nearest whole number, meaning that 0 will not be counted, but 1000 will.
    } else if (level == 2) {
       var numberOne = Math.ceil(Math.random() * 1000);
       var numberTwo = Math.ceil(Math.random() * 1000); 

        //This loop ensures that both the numbers will not be the same.
        while(numberOne == numberTwo){
          var numberOne = Math.ceil(Math.random() * 1000);
          var numberTwo = Math.ceil(Math.random() * 1000);
        }  
      }

    //to randomise what type of number the user is supposed to pick, I have used the math random inbuilt function again. But in this case I have multiplied the function by 2, meaning the number that is chosen will either be one, or two. I have made this a variable called biggerOrSmaller.
    var biggerOrSmaller = Math.ceil(Math.random() * 2);
      
      //I then linked the number one to smaller, and the number two to bigger. So if the number picked was 1, then biggerOrSmaller will be smaller.
      if (biggerOrSmaller == 1){
        biggerOrSmaller = ("smaller");
      } else if (biggerOrSmaller == 2){
         biggerOrSmaller = ("bigger");
        }      
    
    //this is the actual question. In this prompt I have asked the user which number is biggerOrSmaller (depending on what the randomiser chooses) and I have displayed the 2 random numbers. I will store the answer to this prompt under the variable, userAnswer.  
    var userAnswer = prompt("Which number is " + biggerOrSmaller + "? \n" + numberOne + " or " + numberTwo);
      
      //this piece of code will check to see if the user inputs a value which is not a number if the user does not input an answer. In this situationt the user will be alerted that this wasn't valid, and they will be re-asked the same question. It is a while so it is a loop.
      while(isNaN(userAnswer) || userAnswer === ""){
        alert("Sorry that is not a integer " + userName + ", please try again");
          userAnswer = prompt("Which number is " + biggerOrSmaller + "? \n" + numberOne + " or " + numberTwo);
      }
      
      //this piece of code will check to see if the user inputs the correct value. All the conditions below are the conditions in which the inputted answer is correct and expected.       
      if ((biggerOrSmaller == ("bigger") && (numberOne < numberTwo && userAnswer == numberTwo)) || (biggerOrSmaller == ("bigger") && (numberOne > numberTwo && userAnswer == numberOne)) || (biggerOrSmaller == ("smaller") && (numberOne < numberTwo && userAnswer == numberOne)) || (biggerOrSmaller == ("smaller") && (numberOne > numberTwo && userAnswer == numberTwo))){
        
        alert("Yay " + userName + "! You got it right");
        userScore = userScore + 1;
       
        //this piece of code will check to see if the user inputs the correct value. All the conditions below are the conditions in which the inputted answer is correct and expected.            
        } else if ((biggerOrSmaller == ("bigger") && (numberOne > numberTwo && userAnswer == numberTwo)) || (biggerOrSmaller == ("bigger") && (numberOne < numberTwo && userAnswer == numberOne)) || (biggerOrSmaller == ("smaller") && (numberOne > numberTwo && userAnswer == numberOne)) || (biggerOrSmaller == ("smaller") && (numberOne < numberTwo && userAnswer == numberTwo))){
        
            alert("Sorry " + userName + "! You got it wrong, try another set of numbers");
       
         //this piece of code will check to see if the user inputs the incorrect value. All the conditions below are the conditions in which the inputted answer is incorrect but expected.                
          } else {
              alert("Sorry " + userName + "! That isn't a valid answer, try another question.");
             }
    alert ("Progress: \n\nYour score is: " + userScore + "\nYou're on level: " + level);

    //This is the code in which you level up. Once you have 3 points it will set your points back down to 0 and it will level you up to level 2.    
    while (level == 1 && userScore == 3){
      userScore = 0;
      level = 2;
        alert ("Congratulations " + userName + "! You're on level " + level + " now! \nThe numbers will be a little bit larger now and your score will be reset to zero.");
    }
    
  }

//This is the end of my game.
alert ("Congratulations " + userName + "! \n\nYou have completed Comparer! YAY!");


