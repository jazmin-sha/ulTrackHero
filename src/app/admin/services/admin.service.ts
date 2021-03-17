import { Userlist } from './../models/userlist';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, Subscribable, Subscription } from 'rxjs';

const baseUrl = 'https://flutter-nodejsapp.herokuapp.com/admin';
const singleUserUrl = 'https://flutter-nodejsapp.herokuapp.com/admin/getOneDataOfUser';
const deleteUser = 'https://flutter-nodejsapp.herokuapp.com/admin';
const adminUrl = 'https://flutter-nodejsapp.herokuapp.com/admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  // get all users
  getAllUsers():Observable<any>{
    return this.http.get(baseUrl + '/getAllUserData');
  }

  // add a new user
  addNewUser(data:any): Observable<any> {
    return this.http.post(baseUrl + '/userRegister',data)
  }

  // get a single user
  getSingleUser(id:any): Observable<any>{
    return this.http.get(`${singleUserUrl}/${id}`);
  }

  // update single user
  updateSingleUser(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // single user delete
  deleteUser(id:any): Observable<any>{
    return this.http.delete<any>(`${deleteUser}/${id}`);
  }

  // search
  findByName(username:any): Observable<any>{
    return this.http.get(`${baseUrl}?username = ${username}`)
  }

  //admin login 
  adminLogin(user:any):Observable<any>{
    return this.http.post(adminUrl + '/adminLogin' , user)
  }

  adminLogout(user:any):Observable<any>{
    return this.http.post(adminUrl + '/adminLogOut' , user)
  }

// logout
  deleteToken() {
    localStorage.removeItem('authToken');
  }
}
