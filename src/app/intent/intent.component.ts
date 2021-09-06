import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,FormArray } from '@angular/forms';
import { intent } from '../Model/intent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit {
 
  intentData: intent;
  usersList: intent[] = [new(intent),new(intent)]

  constructor(private router:Router , private activeRouter:ActivatedRoute) { }
 
  ngOnInit(): void {
this.intentData = {intentname: '', description: ''}
//this.addvalue()
  }

 addvalue()
  {
//this.intentData = {intentname: '', description: ''};
    this.usersList.push(this.intentData);
    console.log(this.usersList)
  }

  removevalue()
  {
     this.usersList.pop()
  }

  datagen()
  {
    this.router.navigate(['/data-generator'])  
  }
  usecase(){
    this.router.navigate(['/usecase'])
  }
}
