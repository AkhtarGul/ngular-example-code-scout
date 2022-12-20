import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  private API_URL = 'https://randomuser.me/api/'

  getProfile(){
    return this.http.get(this.API_URL+'?nat=de');
  }
  getAllProfiles(amount:number){
    return this.http.get(this.API_URL+'?results='+amount);
  }
}
