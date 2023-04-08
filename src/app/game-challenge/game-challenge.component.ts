import { Component } from '@angular/core';

@Component({
  selector: 'app-game-challenge',
  templateUrl: './game-challenge.component.html',
  styleUrls: ['./game-challenge.component.css']
})
export class GameChallengeComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
