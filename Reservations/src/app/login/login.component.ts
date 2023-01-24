import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
Email:string="";
password:string="";

  constructor( private _route: Router) { }

  ngOnInit(): void {
  }
  // onFormSubmission(referenceForForm: NgForm) {
  //   if (
  //     referenceForForm.value.userName === 'a' &&
  //     referenceForForm.value.password === 'b'
  //   ) {
  //     this._route.navigate(['table']);
  //   }
  // }
  // onFormSubmit() {}
login(){
  if(this.Email=='a' && this.password=='b'){
    this._route.navigate(['table']);

  }
  else if(this.Email=='b' && this.password=='b')
  {
     this._route.navigate(['admin']);
  }
}


}
