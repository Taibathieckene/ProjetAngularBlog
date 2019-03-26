import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Posts';

  posts=[
    {
      title:'Mon premier Post',
      content:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
      loveIts:2,
      created_at:new Date()
    },
    {
      title:'Mon deuxieme post',
      content:'Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar',
      loveIts:0,
      created_at:new Date()
    },
    {
      title:'Encore un post',
      content:'Inlecebras  progrediar voragines et varias voluptatum , Mensarumne longius  enim',
      loveIts:4,
      created_at:new Date()
    }
  ];
  constructor(){

  }
}
