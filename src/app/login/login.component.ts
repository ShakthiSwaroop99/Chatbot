import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:String = "";
  password:String = "";

constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  Login()
  {
    if(this.userId == "Admin" && this.password == "admin@123"){
      console.log("Welcome")
      this.router.navigate(['/landing'])
    
    }
  }

}
