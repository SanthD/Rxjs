import { Component, OnInit } from '@angular/core';
import {  Observable  } from 'rxjs';
import { share, map } from 'rxjs/operators';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor() { }

  dt = new Array();

  ngOnInit(): void {
    // console.log(this.obs)
 const observer = this.obs.subscribe(
      (x:any)=> this.dt.push(x),
      (err:any) => this.dt.push(err),
      ()=>this.dt.push('Completed')
  )

  // const observer2 =    this. obs.subscribe(
  //   (x:any)=> this.dt.push(x),
  //  )

  // observer.add(observer2)

  // setTimeout(() => {
  //   observer.unsubscribe();
  // }, 6001);

  setTimeout(() => {
    this.obs.subscribe( (x:any)=>this.dt.push( `From Obs2 ${x}`))
  },1000);
 }



 

   obs = new Observable((observer:any)=>{
    try {
      observer.next('Hi...');
      observer.next("how are you");
      // observer.complete();
      // observer.next("This will not sent");  
      setInterval(()=>{
        observer.next('am good')
      },2000)
    } catch (err) {
      observer.error(err);
      
    }
    share()
  })


  

}
