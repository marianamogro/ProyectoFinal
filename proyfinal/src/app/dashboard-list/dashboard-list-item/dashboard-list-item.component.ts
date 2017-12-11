
import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

import { User } from "../shared/model/user";
@Component({
  selector: 'pf-dashboard-list-item',
  templateUrl: './dashboard-list-item.component.html',
  styleUrls: ['./dashboard-list-item.component.css']
})
export class DashboardListItemComponent implements OnInit {
userParam: User;
  constructor() { }

  ngOnInit() {
  }

}
