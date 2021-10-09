class Player {
    constructor(){
      this.obstacles = 0;
      this.name = null;
    }
  
    update(){
        console.log("Hi");
      database.ref(player).update({
        name:this.name,
        obstacles:this.obstacles
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  