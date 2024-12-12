import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  value:any;
  f2:any
  constructor(public es:EventService){}
  ngOnInit(){
    this.es.abc.subscribe((res)=>{
      this.value=res
    })
  }

  second(){
    this.es.firstToSecond(this.f2)
  }

}
