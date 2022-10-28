import {  Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: `<p>Hello world</p>`,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
 // styles: ['']
})

export class AppComponent {
  name = 'bergony bandeira'
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();

  getName(){
    return this.name
  }
  changeImage(e: KeyboardEvent){
      this.imgURL = (e.target as HTMLInputElement).value;

  }
  logImg(event: string){
    console.log(event)
  }
}
