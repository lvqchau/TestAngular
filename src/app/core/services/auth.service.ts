import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SigninParams, SignupParams, SigninResult, SignupResult } from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(data: SigninParams): Observable<SigninResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap"

    return this.http.post<SigninResult>(url, data)
  }

  signup(data: SignupParams): Observable<SignupResult> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy"

    return this.http.post<SignupResult>(url, {...data, maNhom: 'GP01'})
  }

}
