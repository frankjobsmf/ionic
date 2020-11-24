import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ApiRoot } from './apiroute';

let apiUrl = ApiRoot.url;

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(public http: HttpClient) { }


  postData(credentials) {
		return new Promise((resolve, reject) => {
			let headers = new HttpHeaders({'Content-Type': 'application/json'});

			this.http.post(apiUrl + "login", JSON.stringify(credentials), {headers: headers})
			.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
 }


}


