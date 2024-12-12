import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-amm1',
  templateUrl: './amm1.component.html',
  styleUrl: './amm1.component.css'
})
export class Amm1Component {
  fname:any;
  constructor(public ss:S1Service){}
  ngOnInit(){
    this.ss.s1Sub.subscribe((res)=>{
      this.fname=res;
    })
  }

}
