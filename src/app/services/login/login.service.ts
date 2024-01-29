import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../../../mapping/response/Apiresponse';
import { Userlogin } from '../../../mapping/login/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = "https://car-selling-ws-prod-production-1011.up.railway.app/login"

  constructor( private http : HttpClient){}

  login(user : Userlogin):Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.url, user);
  }
}
