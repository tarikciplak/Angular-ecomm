import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
