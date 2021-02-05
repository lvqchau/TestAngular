import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    matKhau: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  handleSignin() {
    // Đánh dấu tất cả input có trạng thái touched thành true
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return
  }

}







