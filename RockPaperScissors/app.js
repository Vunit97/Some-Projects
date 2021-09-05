//Get Variables
const game = ()=> {
    let pScore = 0;
    let bScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen= document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };
    //Play Match
    const playMatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const botHand = document.querySelector(".bot-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        })
    //Bot Options
    const botOptions = ["rock" , "paper", "scissors"];
    options.forEach(option=>{
        option.addEventListener("click", function(){
            //Computer Choice
            const botNumber = Math.floor(Math.random() * 3);
            const botChoice = botOptions[botNumber];
            //Where we call compare Hands

            setTimeout(()=>{
                compareHands(this.textContent, botChoice);

                //Update Images
                playerHand.src = `./images/${this.textContent}.png`;
                botHand.src = `./images/${botChoice}.png`;
            }, 2000)

            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            botHand.style.animation = "shakeBot 2s ease";
        });
    });
  };

  const updateScore = ()=> {
      const playerScore = document.querySelector(".player-score p");
      const botScore = document.querySelector(".bot-score p");
      playerScore.textContent = pScore;
      botScore.textContent = bScore;
  }

  const compareHands = (playerChoice, botChoice)=> {
    const winner = document.querySelector(".winner");
    //Checking Tie
    if(playerChoice === botChoice){
        winner.textContent = "It is a tie";
        return;
    }
    //Check for Rock
    if(playerChoice === "rock"){
        if(botChoice === "scissors"){
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            return
        } else{
            winner.textContent = "Bot wins";
            bScore++;
            updateScore();
            return;
        }
    }
    //Check for Paper
    if(playerChoice === "paper"){
        if(botChoice === "scissors"){
            winner.textContent = ("Bot wins");
            bScore++;
            updateScore();
            return;
        } else{
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            return;
        }
    }
    //Check for Scissors
    if(playerChoice === "scissors"){
        if(botChoice === "rock"){
            winner.textContent = ("Bot wins");
            bScore++;
            updateScore();
            return;
        } else{
            winner.textContent = "Player wins";
            pScore++;
            updateScore();
            return;
        }
    }
  };

    //Call out the inner function
    startGame();
    playMatch();
};

    //Start the game function
    game();