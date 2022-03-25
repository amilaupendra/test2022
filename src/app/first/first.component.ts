import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title:string='thtis is the first component';
  constructor() { }

  ngOnInit(): void {
  }

}
