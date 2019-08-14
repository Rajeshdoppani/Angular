import { Component, OnInit } from '@angular/core';
import { MyServService } from './../my-serv.service';
@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  constructor(private myService: MyServService) { }

  ngOnInit() {
    this.myService;
  }

}
