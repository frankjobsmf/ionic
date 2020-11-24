import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ApiRoot } from './apiroute';

let apiUrl = ApiRoot.url;

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(public http: HttpClient) { }

 

 getParking(token){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "aparcamiento", {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}




}
