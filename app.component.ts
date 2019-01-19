import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'my-dream-app flynewsky';
  submit1ButtonText: string = ' submit ';
  n2Hoo:string = 'n2 Hoo Text';
  cg3Array = [];
  
  ngOnInit(){
   this.initArrays();
  }
  
  onTog1Click() {
    document.querySelector('.cgCon1').classList.toggle("-tog1");
    if (this.n2Hoo.length > 0) 
      {this.n2Hoo = ''}
    else
      {this.n2Hoo = 'n2Hoo is back'}
  } 
 onTog2(){
   alert('running onTog2');
  //{document.getElementById("labelFname").innerHTML = 'tog2'}
 }
 onSubmit1Click(){
   //alert('onSubmit1 was clicked');
  //  take all the form fields and json-ize them
  //  do a fancy api call asyncronously
  this.submit1ButtonText = ' submitting now... ';
  // when done, this.submit1ButtonText = ' submitted ';
  this.shakeAndBake() ;

 }

 shakeAndBake() { 
   alert('running shakeAndBake')

 }

 initArrays() {
  this.cg3Array = [
    {ix: 0, lineMark: false, dude: 'Core', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Corn', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Lery', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Bill', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Eddy', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Rico', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Cany', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Till', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Samy', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Dufy', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Duff', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Peek', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Reek', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Land', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Fill', age: 27, size: 13},
    {ix: 0, lineMark: false, dude: 'Sell', age: 41, size: 11}
  ];

  let i = 0;
  for ( i = 0; i < this.cg3Array.length; i++) {
    this.cg3Array[i].ix = i;
    if ( (i+4)/4 == Math.round((i+4)/4) ) {
     // -alert('divisible by 4');
    //  this.cg3Array[i].line = (i+4)/4 ;
      this.cg3Array[i].lineMark = true;
    }
  }
 


 } // End of initArrays

}
