import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit {

  constructor(private router:Router , private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getValues(val:String)
  {
    console.warn(val);
    this.router.navigate(['/intent'])
  }
  intent()
  {
    this.router.navigate(['/intent'])
  }
  config()
  {
    this.router.navigate(['/config'])
  }

}
