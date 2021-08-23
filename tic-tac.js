//Create a new component for product-details with a prop of details. 
Vue.component('game', {
  template: `
    <div>
    <p>{{messagePrint}} </p>
    <span v-if="gameOver==true"> Игра окончена </span>
      <table v-if="gameOver == false">
        <tr>
           <td hidden=true>{{tempCount}}</td>
            <td v-on:click="temp(0)">{{gameField[0]? gameField[0]: " " }}</td>
            <td v-on:click="temp(1)">{{gameField[1]? gameField[1] : " " }}</td>
            <td v-on:click="temp(2)">{{gameField[2]? gameField[2]: " " }}</td>
        </tr>
         <tr>
            <td v-on:click="temp(3)">{{gameField[3]? gameField[3]: " " }}</td>
            <td v-on:click="temp(4)">{{gameField[4]? gameField[4]: " " }}</td>
            <td v-on:click="temp(5)">{{gameField[5]? gameField[5]: " " }}</td>
        </tr>
         <tr>
            <td v-on:click="temp(6)">{{gameField[6]? gameField[6]: " " }}</td>
            <td v-on:click="temp(7)">{{gameField[7]? gameField[7]: " " }}</td>
            <td v-on:click="temp(8)">{{gameField[8]? gameField[8]: " " }}</td>
        </tr>
      </table>
      
        <table v-if="gameOver == true">
        <tr>
           <td hidden=true>{{tempCount}}</td>
            <td v-if="winnerCombo[0]" bgcolor="red">{{gameField[0]? gameField[0]: " " }}</td>
                <td v-else>{{gameField[0]? gameField[0]: " " }}</td>
            <td v-if="winnerCombo[1]" bgcolor="red">{{gameField[1]? gameField[1]: " " }}</td>
                <td v-else>{{gameField[1]? gameField[1]: " " }}</td>
            <td v-if="winnerCombo[2]" bgcolor="red">{{gameField[2]? gameField[2]: " " }}</td>
                <td v-else>{{gameField[2]? gameField[2]: " " }}</td>
        </tr>
         <tr>
            <td v-if="winnerCombo[3]" bgcolor="red">{{gameField[3]? gameField[3]: " " }}</td>
                  <td v-else>{{gameField[3]? gameField[3]: " " }}</td>
            <td v-if="winnerCombo[4]" bgcolor="red">{{gameField[4]? gameField[4]: " " }}</td>
                  <td v-else>{{gameField[4]? gameField[4]: " " }}</td>    
            <td v-if="winnerCombo[5]" bgcolor="red">{{gameField[5]? gameField[5]: " " }}</td>
                  <td v-else>{{gameField[5]? gameField[5]: " " }}</td>
        </tr>
         <tr>
            <td v-if="winnerCombo[6]" bgcolor="red">{{gameField[6]? gameField[6]: " " }}</td>
                  <td v-else>{{gameField[6]? gameField[6]: " " }}</td>
             <td v-if="winnerCombo[7]" bgcolor="red">{{gameField[7]? gameField[7]: " " }}</td>
                  <td v-else>{{gameField[7]? gameField[7]: " " }}</td>
             <td v-if="winnerCombo[8]" bgcolor="red">{{gameField[8]? gameField[8]: " " }}</td>
                 <td v-else>{{gameField[8]? gameField[8]: " " }}</td>
        </tr>
      </table>
      <button v-on:click="clearGameField"> Очистить поле</button>
    </div>
   `,
 data() {
   return {
       gameField: [false, false, false,
                        false, false, false,
                        false, false, false],
      winnerCombo: [false, false, false,
                   false, false, false,
                   false, false, false],
      hasWinner: true,
      tempCount: 0,
      message: '',
      gameOver: false,
    }
  }, 
  
 computed: {
   
    messagePrint(){
      
      if(this.gameOver)
        {
          this.message = '';
        }
      
     else if(this.tempCount%2!=0 && !this.gameOver)
        {
          this.message = 'Ходит нолик';
        }
      else 
        {
          this.message = 'Ходит крестик';
        }
      
      return this.message;
    },
   
   printCombo() {
     return this.winnerCombo;
   }
 },
  
  methods: {
    temp : function(index) {
      
        if(!this.gameField[index] && this.tempCount%2==0 && !this.gameOver)
          {
            this.tempCount++;
            this.gameField[index] = 'X';
          }
         
         else if (!this.gameField[index] && this.tempCount%2!=0 && !this.gameOver)
           {
             this.tempCount++;
             this.gameField[index] = 'O';
           }
          
       this.gameIsFinished();
      },
   clearGameField : function() {
         this.tempCount = 0;
         this.gameOver = false;
         this.gameField = [false, false, false,
                        false, false, false,
                        false, false, false];
         this.winnerCombo = [false, false, false,
                        false, false, false,
                        false, false, false];
       },
    gameIsFinished : function() {
      cells = this.gameField;
      if(
          ((cells[0] == cells[1] && cells[1] ==cells[2]) 
          && (cells[0] && cells[1] && cells[2]))
        ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[0] = cells[0];
          this.winnerCombo[1] = cells[1];
          this.winnerCombo[2] = cells[2];
      }
        
      else if(((cells[3] == cells[4] && cells[4] ==cells[5])
          && (cells[3] && cells[4] && cells[5]))
       ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[3] = cells[3];
          this.winnerCombo[4] = cells[4];
          this.winnerCombo[5] = cells[5];

      }
        
     else if(((cells[6] == cells[7] && cells[7] ==cells[8]) 
           && (cells[6] && cells[7] && cells[8])))
      {
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[6] = cells[6];
          this.winnerCombo[7] = cells[7];
          this.winnerCombo[8] = cells[8];

      }
         
      else if(((cells[0] == cells[3] && cells[3] ==cells[6]) 
          && (cells[0] && cells[3] && cells[6]))
         ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[0] = cells[0];
          this.winnerCombo[3] = cells[3];
          this.winnerCombo[6] = cells[6];

      }
        
      else if(((cells[1] == cells[4] && cells[4] ==cells[7])   
           && (cells[1] && cells[4] && cells[7]))
       ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[1] = cells[1];
          this.winnerCombo[4] = cells[4];
          this.winnerCombo[7] = cells[7];

      }
        
      else if(((cells[2] == cells[5] && cells[5] ==cells[8])
          && (cells[2] && cells[5] && cells[8]))
        ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[2] = cells[2];
          this.winnerCombo[5] = cells[5];
          this.winnerCombo[8] = cells[8];

      }
        
     else if(((cells[0] == cells[4] && cells[4] ==cells[8])
          && (cells[0] && cells[4] && cells[8]))
                 ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[0] = cells[0];
          this.winnerCombo[4] = cells[4];
          this.winnerCombo[8] = cells[8];

      }
        
       else if (((cells[2] == cells[4] && cells[4] ==cells[6]) 
          && (cells[2] && cells[4] && cells[6]))
             ){
          this.hasWinner = true;
          this.gameOver = true;
          this.winnerCombo[2] = cells[2];
          this.winnerCombo[4] = cells[4];
          this.winnerCombo[6] = cells[6];

      }
        
      else if (((cells[0] && cells[1] && cells[2] && cells[3] && cells[4] &&
         cells[5] && cells[6] && cells[7] && cells[8]))
      ){
          this.hasWinner = false;
          this.gameOver = true;
      }
    },
    
}
})

var app = new Vue({
    el: '#app',
  
    data: {
       tempCount: 0,
       gameField: [false, false, false,
                        false, false, false,
                        false, false, false],
    },

})
