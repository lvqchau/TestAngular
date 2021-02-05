import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  handleSignup() {
    // Làm sao lấy đc value của form, sử dụng ViewChild

    if(this.signupForm.invalid) return

    alert(JSON.stringify(this.signupForm.value))
  }

}










