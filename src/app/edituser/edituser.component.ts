import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  user: User = { id: 0, name: '', position: '', city: '' };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const existingUser = this.userService.getUserById(id);

    if (existingUser) {
      this.user = { ...existingUser }; // ✅ Copies user data into the form fields
    } else {
      alert("User not found!"); // ❌ Error handling if user ID is incorrect
      this.router.navigate(['/']); // Redirect back to table if user not found
    }
  }

  updateUser() {
    this.userService.updateUser(this.user);
    this.router.navigate(['/']); // Navigate back to the table after updating
  }
}
