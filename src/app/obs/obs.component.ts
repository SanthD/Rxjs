import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.obs)
  }

  obs = new Observable((observer:any)=>{
    observer.next('Hi...')
  });

  

}
