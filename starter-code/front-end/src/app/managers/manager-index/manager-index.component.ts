import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-index',
  templateUrl: './manager-index.component.html',
  styleUrls: ['./manager-index.component.css']
})
export class ManagerIndexComponent implements OnInit {

	allManagers = [];

	deleteManager(deletedManager) {
		this.managersService.deleteManager(deletedManager)
		.subscribe((res)=> {
			this.allManagers.splice(this.allManagers.indexOf(deletedManager), 1);
		});
	}

  constructor(
  	private managersService : ManagersService
  ) { }

  ngOnInit() {
  	this.managersService.getAllManagers()
  	.subscribe((res)=> {
  		this.allManagers = res.json();
  		console.log(this.allManagers);
  	});
  }

}
