import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-amm2',
  templateUrl: './amm2.component.html',
  styleUrl: './amm2.component.css'
})
export class Amm2Component {
  fname:any;
  constructor(public ss:S1Service){}
  ngOnInit(){
    this.ss.s1Sub.subscribe((res)=>{
      this.fname=res;
    })
  }

}
