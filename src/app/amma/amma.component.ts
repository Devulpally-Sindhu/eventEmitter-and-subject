import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-amma',
  templateUrl: './amma.component.html',
  styleUrl: './amma.component.css'
})
export class AmmaComponent {
  firstname:any;
  constructor(public ss:S1Service){}

  callSub(){
    this.ss.s1Sub.next(this.firstname);
  }

}
