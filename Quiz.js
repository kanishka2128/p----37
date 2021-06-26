class Quiz {
  constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.input.hide()
      this.button.hide()
      this.greeting.hide()

    


    //write code to change the background color here
    background("yellow")
    
    //write code to show a heading for showing the result of Quiz
    if (contestantCount === 2) {


      fill("Blue")
      textSize(20)
      text("The results are: ", 50, 50)
      background("purple")

      if (allContestants !== undefined) {
        fill("Blue")
        textSize(20)
        text("Note! contestants which answered the right answer are highlighted in green.",130,230);
      }
      //write code to add a note here
             
      //write code to highlight contest who answered correctly
      for (var plr in allContestants) {
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
        fill("green")
        else 
          fill("red") 
          
      }
    }
    //call getContestantInfo( ) here
    getContestantInfo()


    //write condition to check if contestantInfor is not undefined
    
    
  }

}
