import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    @Input() user:UserModel = null;
    constructor() { }

    ngOnInit(): void {
        console.log(this.user);
    }

}
