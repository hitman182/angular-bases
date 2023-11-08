import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName:string[]=['Spiderman','Ironman','Thor','Hulk','Loki'];
  public deletedHero?:string;


  deleteHero(){
      this.deletedHero = this.heroName.pop();
  }
}
