import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManagersService {

	baseUrl = 'http://localhost:3000';

	getAllManagers() {
		return this.http.get(`${this.baseUrl}/api/managers`);
	}

	saveManager(newManager) {
		console.log(newManager);
		return this.http.post(`${this.baseUrl}/api/managers/`, newManager);
	}

  constructor(private http: Http) { }

}