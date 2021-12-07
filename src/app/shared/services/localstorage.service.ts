export class LocalstorageService{
    getItem(key:string){
        let data:any;
        if(key){
            if (localStorage[key]) {
                data = JSON.parse(localStorage[key]);
            } 
        }
        return data;
    }
    
}