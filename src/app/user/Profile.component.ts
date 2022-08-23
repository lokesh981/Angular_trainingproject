/*import { Component } from '@angular/core'

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {
       
}*/


/*import { Component } from '@angular/core'
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit {
       
  profileForm:FormGroup|any;

  constructor(private authService:AuthService,private router:Router){}

ngOnInit(): void {
  let firstName=new FormControl(this.authService.currentUser.firstName);
  let lastName=new FormControl(this.authService.currentUser.lastName);

  this.profileForm=new FormGroup({
    firstName:firstName,
    lastName:lastName
  })
}

saveProfile(formValues:any){
this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
this.router.navigate(['events'])
}
cancel(){
this.router.navigate(['events'])
}

}*/

import { Component } from '@angular/core'
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em { float:right; color:#E05C65; padding-left:10px; }
  .error input { background-color : #E3C3C5 }
  .error ::-webkit-input-placeholder{ color : #999; } 
  .error ::-moz-placeholder{ color : #999; } 
  .error :-moz-placeholder{ color : #999; } 
  .error :ms-input-placeholder{ color : #999; } 
  `]
})
export class ProfileComponent implements OnInit {
       
  profileForm:FormGroup|any;
  firstName:FormControl|any;
  lastName:FormControl|any;

  constructor(private authService:AuthService,private router:Router){}

ngOnInit(): void {
  this.firstName=new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')]);
  this.lastName=new FormControl(this.authService.currentUser.lastName,Validators.required);

  this.profileForm=new FormGroup({
    firstName:this.firstName,
    lastName:this.lastName
  })
}

validateLastName(){
  return this.lastName.invalid && this.lastName.touched
}

validateFirstName(){
  return this.firstName.invalid && this.firstName.touched
}


saveProfile(formValues:any){
  if(this.profileForm.valid){
this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
this.router.navigate(['events'])
  }
}
cancel(){
this.router.navigate(['events'])
}

}