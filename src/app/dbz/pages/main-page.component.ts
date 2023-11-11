import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent implements OnInit {
  constructor() { }

  public characters: Character [] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    },
  ];


  onNewCharacter( {name,power}:Character){
    this.characters.push({name:name, power:power});
  }

  onDeleteCharacter( index: number){
    console.log({index});
    this.characters.splice(index,1);
  }




  ngOnInit() { }
}
