import { Component, OnInit } from '@angular/core';
import { UserModel } from './shared/models/user.model';
import { UserService } from './shared/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userLoggedIn: boolean = false;
    user: UserModel;
    title = 'veefin-ang';

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.user = this.userService.getLoggedInUser();
        if (this.user) {
            this.userLoggedIn = true;
        }
    }
}
