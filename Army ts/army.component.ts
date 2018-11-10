import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    class Soldier{
      private personalNumber:number;
      private fighter:true;
      private serve:number;
      
      constructor(personalNumber:number,fighter:true,serve:number){
        this.personalNumber = personalNumber;
        this.fighter = fighter;
        this.serve = serve;

      }
    getPersonalNumber():number{return this.personalNumber;}
    getfighter():true{return this.fighter;}
    getServe():number{return this.serve;}
    
    setFighter(fighter):void{this.fighter = fighter}
    setServe(serve):void{
      if(serve>0 && serve<4)
      serve =Math.floor(Math.random()*3+1)
        if(serve == 1){console.log("AirForce")}
        else if (serve == 2){console.log("SeaForce")}
        else if (serve == 3){console.log("GroundForce")}
        else serve = 1;
        this.serve = serve;
    }
    
    }
    
    class SquadCommender extends Soldier{
      private soldiers:Soldier[];

      constructor(soldiers:Soldier[],personalNumber:number,fighter:true,serve:number){
        super(personalNumber,fighter,serve);
        this.soldiers = soldiers;
      }
    getSoldiers():Soldier[]{
      return this.soldiers;
    }
    setSoldiers(soldiers):void{
      this.soldiers = soldiers;
    }
    numOfFighters(soldiers){
      var isFighter:number;
      for(var i=0;i<this.soldiers.length;i++){
        if(this.getSoldiers[i].getfighter() == true)
        isFighter++;
      }
      return isFighter;
    }
    }
    class Squad{
      squadName:string;
      soldiers:Soldier[];
      commenders:SquadCommender[];
      commenderID:number;

      constructor(squadName:string,soldiers:Soldier[],commenders:SquadCommender[],commenderID:number){
        this.squadName = squadName;
        this.soldiers = soldiers;
        this.commenders = commenders;
        this.commenderID = commenderID;
      }

      getSquadName():string{
        return this.squadName
      }
      setCommenderID(id):void{
        this.commenderID = id;
      }
    }
  }
}
