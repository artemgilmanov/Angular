import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public selectedUser = signal(DUMMY_USERS[randomIndex]);
  public imagePath = computed(
    () => `assets/users/${this.selectedUser().avatar}`
  );

  // Getter to compute the image path based on the selected user's avatar
  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log('User selected:', this.selectedUser);
  }
}
