import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

	updatedManager = <any>{};

  constructor(
  	private managersService : ManagersService,
  	private router : Router,
  	private route : ActivatedRoute
  ) { }

  ngOnInit() {
  	this.route.params.forEach((param)=> {
  		this.managersService.getOneManager(param.id)
  		.subscribe((res)=> {
  			console.log(res.json());
  			this.updateManager = res.json();
  		})
  	});
  }

  updateManager(updatedManager) {
  	console.log('Updating manager:');
  	console.log(updatedManager);
  	this.managersService.updateManager(updatedManager)
  	.subscribe((res)=> {
  		let manager = res.json();
  		console.log(manager);
  		this.router.navigate(['/managers/' + manager.id]);
  	});
  }

}
