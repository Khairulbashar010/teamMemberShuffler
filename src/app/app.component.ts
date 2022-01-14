import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newName: string = '';
  members: string[] = [];
  teamSize: number | '' = '';
  errorMessage = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newName) {
      this.errorMessage = "Name cannot be empty";
      return;
    }
    this.members.push(this.newName);
    this.newName = '';
    this.errorMessage = '';
  }
  generateTeam() {
    if (!this.teamSize || this.teamSize <= 0 || this.teamSize > this.members.length) {
      this.errorMessage = "Not enough member";
      return;
    }
	this.teams = [];
    let allMembers = [...this.members]
    while (allMembers.length) {
      for (let index = 0; index < this.teamSize; index++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (this.teams[index]) {
          this.teams[index].push(member);
        } else {
          this.teams[index] = [member];
        }
      }
    }
  }
}
