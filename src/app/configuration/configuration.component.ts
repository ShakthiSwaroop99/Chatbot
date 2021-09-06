import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private router:Router , private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  usecase(){
    this.router.navigate(['/usecase'])
  }
  land(){
    this.router.navigate(['/landing'])//land
  }
  chatbox()
  {
    this.router.navigate(['/chat'])
    
    
  }

}
