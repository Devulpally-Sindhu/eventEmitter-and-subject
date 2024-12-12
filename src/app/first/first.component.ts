import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  f1:any;
  result:any;
  constructor(public es:EventService){}
  ngOnInit(){
    this.es.abc.subscribe((res1)=>{
      this.result=res1;
    })
  }
  first(){
    this.es.firstToSecond(this.f1) ;
  }
}
