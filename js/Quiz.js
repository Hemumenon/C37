class Quiz {
  constructor(){}

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
    question.hide();
    background("yellow")
    textSize(30);
    fill("black")
    text("RESULT OF THE QUIZ", 340,50);
    text("------------------------------------", 310,65)
    Contestant.getPlayerInfo();
    
    if(allContestants !== undefined){
    var display_Answers = 230;
    fill("Blue")
    textSize(20)
    text("NOTE : CONTESTANTS WHO ANSWERED THE QUIZ CORRECTLY WILL BE HIGHLIGHTED IN GREEN COLOUR")
    }

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
