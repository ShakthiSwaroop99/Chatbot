import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-landing',
  templateUrl: './login-landing.component.html',
  styleUrls: ['./login-landing.component.css']
})
export class LoginLandingComponent implements OnInit {

  constructor(private router:Router , private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  chatbox()
  {
    this.router.navigate(['/chat'])
    
  }
  dusconfig()
  {
    this.router.navigate(['/config'])
    
  }
  login()
  {
    this.router.navigate(['/home'])
    
  }
  

}
