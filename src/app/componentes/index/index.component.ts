// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-index',
//   templateUrl: './index.component.html',
//   styleUrls: ['./index.component.css']
// })
// export class IndexComponent {

// }        esto estaba, OnInit via kar



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}