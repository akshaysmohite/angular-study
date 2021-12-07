export class UserModel {
    constructor(
        public id:number, 
        public name:string, 
        public email:string,
        public auth_token:string,
        public user_type:any,
        public status:number,
        public role_id:any,
        public company_id:any,
        public bank_id:any
    ) {}
}