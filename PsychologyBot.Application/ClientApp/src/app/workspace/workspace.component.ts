import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { SignalRService } from '../signalr.service';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    selectedUser: User;

    constructor(public signalR: SignalRService) { }

    ngOnInit() {
      this.signalR.startConnection();
    }

    onSelect(user: User): void {
      this.selectedUser = user;
    }

    showNotes(user: User): void {
      
    }
}
