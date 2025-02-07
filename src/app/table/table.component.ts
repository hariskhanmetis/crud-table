import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private router: Router) {}

  editUser(id: number) {
    this.router.navigate(['/edituser', id]);
  }

  addUser() {
    this.router.navigate(['/adduser']);
  }
}
