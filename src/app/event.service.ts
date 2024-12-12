import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  abc=new EventEmitter()
  firstToSecond(x:any){
    this.abc.emit(x)
  }

}
