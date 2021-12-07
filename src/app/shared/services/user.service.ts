import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
@Injectable()
export class UserService{
    constructor(private store:LocalstorageService){

    }

    getLoggedInUser(): UserModel{
        const loggedInUser:any = this.store.getItem('user');
       
        if(loggedInUser){
            return new UserModel(
                loggedInUser.id,
                loggedInUser.name,
                loggedInUser.email,
                loggedInUser.auth_token, 
                loggedInUser.user_type,
                loggedInUser.status,
                loggedInUser.role_id,
                loggedInUser.company_id,
                loggedInUser.bank_id
            );
        }
        return null;
    }
}


