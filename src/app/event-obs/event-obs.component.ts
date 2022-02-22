import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-event-obs',
  templateUrl: './event-obs.component.html',
  styleUrls: ['./event-obs.component.css']
})
export class EventObsComponent implements OnInit {

  constructor() { }

  dt = new Array();

   obs =  fromEvent(document,'mousemove')

  ngOnInit(): void {

    setTimeout(() => {
      this.obs.subscribe((x:any)=>this.dt.push(x))
    }, 2000);
  }

  

}
