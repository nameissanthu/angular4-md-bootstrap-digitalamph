import { Component, } from '@angular/core';


@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent{
  
    items: Array<any> = [];
    constructor(){
     this.items =[
      { name:'assets/sli1.jpg' },
      { name:'assets/sli2.jpg' },
      { name:'assets/sli3.jpg' },
      { name:'assets/sli4.jpg' },
      { name:'assets/sli5.jpg' },
      { name:'assets/sli6.jpg' },
      { name:'assets/sli7.jpg' },
      { name:'assets/sli8.jpg' },
      { name:'assets/sli9.jpg' }
     ];
    }
  
}
