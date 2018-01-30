import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {

	oneManager;

  constructor(
  	private route : ActivatedRoute,
  	private managerService : ManagersService
  ) { }

  ngOnInit() {
  	this.route.params.forEach((param)=> {
  		this.managerService.getOneManager(param.id)
  		.subscribe((res)=> {
  			this.oneManager = res.json();
  			console.log(this.oneManager);
  		});
  	});
  }
}
